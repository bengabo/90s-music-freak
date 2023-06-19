import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  musics$ = new BehaviorSubject([]);
  years$ = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) { }

  loadMusics(musicGenreFilters) {
    this.musics$.next([]);
    this.httpClient.get<any[]>('assets/musics.json')
      .pipe(
        delay(1000),
        // Filter musics on client side
        map(musics => {
          if(!musicGenreFilters.length){
            return musics;
          }
          return musics.filter(music => musicGenreFilters.includes(music.genre));
        })
      )
      .subscribe(musics => {
        this.musics$.next(musics);
      });
  }

  // loadYears() {
  //   this.httpClient.get<any[]>('assets/musics.json')
  //     .pipe(
  //       delay(2000)
  //     )
  //     .subscribe(years => {
  //       this.years$.next(years);
  //     })
  // }
}
 
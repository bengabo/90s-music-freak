import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  musics$ = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) { }

  loadMusics() {
    this.httpClient.get<any[]>('assets/musics.json')
      .pipe(
        delay(2000)
      )
      .subscribe(musics => {
        this.musics$.next(musics);
      });
  }

}
 
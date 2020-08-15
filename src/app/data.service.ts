import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getMusics() {
    return this.httpClient.get('assets/musics.json')
      .pipe(
        delay(2000)
      );
  }

}
 
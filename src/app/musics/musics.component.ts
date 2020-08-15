import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html'
})
export class MusicsComponent implements OnInit {

  musics$ = this.dataService.getMusics();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}

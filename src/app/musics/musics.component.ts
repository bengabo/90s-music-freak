import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.scss']
})
export class MusicsComponent implements OnInit {

  musicGenreDropdownOpen = false;
  yearDropdown = false;

  currentMusicGenreFilters = []; 

  musics$ = this.dataService.musics$;
  years$ = this.dataService.years$;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  )  { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const musicGenreFilters = params['music-genre'] || [];
      this.dataService.loadMusics(musicGenreFilters);
      this.currentMusicGenreFilters = musicGenreFilters;
    });
    
  }

  musicGenreFilterApplied($event) {
    this.musicGenreDropdownOpen = false;
    this.router.navigate(['musics'], { queryParams: { 'music-genre' : $event }});
  }

  yearFilterApplied($event) {

    this.yearDropdown = false;
    this.router.navigate(['years'], { queryParams: { 'years' : $event}});
  }
}

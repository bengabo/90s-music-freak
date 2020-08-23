import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.scss']
})
export class MusicsComponent implements OnInit {

  musicTypeDropdownOpen = false;
  yearDropdown = false;

  musics$ = this.dataService.musics$;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  )  { }

  ngOnInit(): void {

    this.dataService.loadMusics();
  }

  musicGenreFilterApplied($event) {
    this.musicTypeDropdownOpen = false;
    this.router.navigate(['musics'], { queryParams: { 'genre': $event }})
  }

  yearFilterApplied($event) {
    this.yearDropdown = false;
    this.router.navigate(['musics'], { queryParams: { 'year': $event }})
  }
}

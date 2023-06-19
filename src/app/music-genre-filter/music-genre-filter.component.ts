import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-music-genre-filter',
  templateUrl: './music-genre-filter.component.html',
  styleUrls: ['./music-genre-filter.component.scss']
})
export class MusicGenreFilterComponent implements OnInit {

  @Input() defaultFilters = [];
  @Output() applied = new EventEmitter();
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    console.log(this.defaultFilters);

    this.form = this.formBuilder.group({
      Electronic: [this.defaultFilters.includes('Electronic')],
      Fusion: [this.defaultFilters.includes('Fusion')],
      Jazz: [this.defaultFilters.includes('Jazz')],
      Metal: [this.defaultFilters.includes('Metal')],
      Pop: [this.defaultFilters.includes('Pop')],
      Rock: [this.defaultFilters.includes('Rock')],
      Rap: [this.defaultFilters.includes('Rap')],
      Soundtrack: [this.defaultFilters.includes('Soundtrack')]
    });
  } 

  submit(formValue) {

    const musicGenres = Object.keys(formValue).filter(item => formValue[item]);
    this.applied.emit(musicGenres);

  }
}

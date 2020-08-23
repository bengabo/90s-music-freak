import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-music-genre-filter',
  templateUrl: './music-genre-filter.component.html',
  styleUrls: ['./music-genre-filter.component.scss']
})
export class MusicGenreFilterComponent implements OnInit {

  @Output() applied = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      Electronic: [],
      Fusion: [],
      Jazz: [],
      Metal: [],
      Pop: [],
      Rock: [],
      Rap: [],
      Soundtrack: []
    });
  } 

  submit(formValue) {

    const musicGenres = Object.keys(formValue).filter(item => formValue[item]);
    this.applied.emit(musicGenres);
  }
}

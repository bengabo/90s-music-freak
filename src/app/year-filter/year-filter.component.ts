import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-year-filter',
  templateUrl: './year-filter.component.html',
  styleUrls: ['./year-filter.component.scss']
})
export class YearFilterComponent implements OnInit {
  
  @Output() applied = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
    this.form = this.formBuilder.group({
      1990: [],
      1991: [],
      1992: [],
      1993: [],
      1994: [],
      1995: [],
      1996: [],
      1997: [],
      1998: [],
      1999: []
    })
  }

  submit(formValue) {

    const years = Object.keys(formValue).filter(item => formValue[item]);
    this.applied.emit(years);
  }
}

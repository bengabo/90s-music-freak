import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicsComponent } from './musics/musics.component';
import { MusicGenreFilterComponent } from './music-genre-filter/music-genre-filter.component';
import { YearFilterComponent } from './year-filter/year-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicsComponent,
    MusicGenreFilterComponent,
    YearFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicsComponent } from '../app/musics/musics.component';

const routes: Routes = [
  {
    path: 'musics',
    component: MusicsComponent
  },
  {
    path: '',
    redirectTo: 'musics',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

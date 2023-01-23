import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'play', pathMatch: 'full' },
      { path: 'play', component: HomePageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

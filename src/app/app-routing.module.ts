import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { HomeComponent }   from './home/home.component';
import { NotFoundComponent }   from './not-found/not-found.component';
import { LecturesComponent } from './lectures/lectures.component';
import { PracticesComponent } from './practices/practices.component';
import { SiteMapComponent } from './site-map/site-map.component';

const routes: Routes = [
  {path: '', component:  HomeComponent},
  {path: 'lectures', component: LecturesComponent},
  {path: 'practices', component: PracticesComponent},
  {path: 'map', component:SiteMapComponent},
  {path: '**', component:  NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

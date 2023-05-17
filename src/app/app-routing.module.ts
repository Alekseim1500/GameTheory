import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { HomeComponent }   from './home/home.component';
import { NotFoundComponent }   from './not-found/not-found.component';
import { LecturesComponent } from './lectures/lectures.component';
import { PracticesComponent } from './practices/practices.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { LectureComponent } from './lecture/lecture.component';
import { TestComponent } from './test/test.component';
import { QuestionComponent } from './question/question.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthorizationComponent } from './authorization/authorization.component';

const routes: Routes = [
  {path: '', component:  HomeComponent},
  {path:'authorization', component: AuthorizationComponent},
  {path: 'lectures', component: LecturesComponent},
  {path: 'lecture', component: LectureComponent},
  {path: 'practices', component: PracticesComponent},
  {path: 'map', component: SiteMapComponent},
  {path: 'test', children:[{path:'question/:id', component: QuestionComponent},{path:'',component:TestComponent}]},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component:  NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

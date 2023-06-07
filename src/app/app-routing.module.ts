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
import { AddLectureComponent } from './add-lecture/add-lecture.component';
import { AddPracticeComponent } from './add-practice/add-practice.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';



const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path: 'home', component:  HomeComponent, canActivate:[AuthGuard]},
  {path: 'lectures', component: LecturesComponent, canActivate:[AuthGuard]},
  {path: 'lecture/:id', component: LectureComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LogInComponent, },
  {path: 'signin', component: SignInComponent},
  {path: 'practices', component: PracticesComponent, canActivate:[AuthGuard]},
  {path: 'map', component: SiteMapComponent, canActivate:[AuthGuard]},
  {path: 'test/:id', children:[{path:'question/:id', component: QuestionComponent},{path:'',component:TestComponent}], canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'addlecture', component: AddLectureComponent, canActivate:[AuthGuard, AdminGuard]},
  {path: 'addpractice', component: AddPracticeComponent, canActivate:[AuthGuard, AdminGuard]},
  {path: '**', component:  NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

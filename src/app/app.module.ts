import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { MainContentComponent } from './main-content/main-content.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './token.interceptor';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeadComponent,
    MainContentComponent,
    LecturesComponent,
    PracticesComponent,
    SiteMapComponent,
    LectureComponent,
    TestComponent,
    QuestionComponent,
    ProfileComponent,
    AddLectureComponent,
    AddPracticeComponent,
    LogInComponent,
    SignInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: reqest=>reqest as any
      }
    })
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
   }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LecturesComponent } from './lectures/lectures.component';
import { PracticesComponent } from './practices/practices.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';

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
    LogInComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

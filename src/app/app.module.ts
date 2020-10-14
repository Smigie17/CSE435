import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './base-app/app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { TeamPageComponent } from './team-page/team-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AgendaPageComponent } from './Restricted/agenda-page/agenda-page.component';
import { ForumPageComponent } from './Restricted/forum-page/forum-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TeamPageComponent,
    ProjectPageComponent,
    AgendaPageComponent,
    ForumPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

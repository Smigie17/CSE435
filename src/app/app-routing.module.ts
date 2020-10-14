import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TeamPageComponent } from './team-page/team-page.component'
import { ProjectPageComponent } from './project-page/project-page.component';
import { AgendaPageComponent } from './Restricted/agenda-page/agenda-page.component';
import { ForumPageComponent } from './Restricted/forum-page/forum-page.component';
const routes: Routes = [{ path: 'Welcome-Page', component: WelcomePageComponent},
                        { path: 'Team-Page', component: TeamPageComponent},
                        { path: 'Project-Page', component: ProjectPageComponent},

                        { path: 'Agenda-Page', component: AgendaPageComponent},
                        { path: 'Forum-Page', component: ForumPageComponent},
                        { path: '**', redirectTo: '/Welcome-Page', pathMatch: 'full' },
                        { path: '',   redirectTo: '/Welcome-Page', pathMatch: 'full' } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

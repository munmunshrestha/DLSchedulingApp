import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {TrialtableComponent} from './components/trialtable/trialtable.component';
import {StdScheduleComponent} from './components/std-schedule/std-schedule.component';
import {DLscheduleComponent} from './components/dlschedule/dlschedule.component';
import {StdScheduleAddComponent} from './components/std-schedule-add/std-schedule-add.component';
import {LoginComponent} from './components/login/login.component';
import {DlClassAddComponent} from './components/dl-class-add/dl-class-add.component'

const routes: Routes = [
  { path: '', component: DlClassAddComponent },        
  {path: 'stdAdd', component: StdScheduleAddComponent},
  {path: 'stdSchedule', component:StdScheduleComponent},
  {path: 'DLSchedule', component:DLscheduleComponent},
  {path: 'login', component:LoginComponent},
  {path: 'DLadd', component:DlClassAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

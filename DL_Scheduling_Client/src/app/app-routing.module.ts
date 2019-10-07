import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {TrialtableComponent} from './components/trialtable/trialtable.component';
import {StdScheduleComponent} from './components/std-schedule/std-schedule.component';
import {DLscheduleComponent} from './components/dlschedule/dlschedule.component';
import {StdScheduleAddComponent} from './components/std-schedule-add/std-schedule-add.component';

const routes: Routes = [
  { path: '', component: TrialtableComponent },        
  {path: 'stdAdd', component: StdScheduleAddComponent},
  {path: 'stdSchedule', component:StdScheduleComponent},
  {path: 'DLScheduler', component:DLscheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

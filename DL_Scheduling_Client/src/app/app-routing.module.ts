import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StdSchedulerComponent } from './components/std-scheduler/std-scheduler.component';
import {TrialtableComponent} from './components/trialtable/trialtable.component';
import {StdScheduleComponent} from './components/std-schedule/std-schedule.component';
import {DLscheduleComponent} from './components/dlschedule/dlschedule.component';
import {StdScheduleAddComponent} from './components/std-schedule-add/std-schedule-add.component';
import {LoginComponent} from './components/login/login.component';
import {DlClassAddComponent} from './components/dl-class-add/dl-class-add.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {StdRequestLeaveComponent} from './components/std-request-leave/std-request-leave.component';


const routes: Routes = [
  { path: 'home', component: StdSchedulerComponent },        
  {path: 'stdAdd', component: StdScheduleAddComponent},
  {path: 'stdSchedule', component:StdScheduleComponent},
  {path: 'DLSchedule', component:DLscheduleComponent},
  {path: 'login', component:LoginComponent},
  {path: 'DLadd', component:DlClassAddComponent},
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  {path: 'leaveRequest', component: StdRequestLeaveComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

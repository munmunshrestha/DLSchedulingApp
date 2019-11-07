import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StdSchedulerComponent } from "./components/std-scheduler/std-scheduler.component";
import { HomeComponent } from "./components/home/home.component";
import { StdScheduleComponent } from "./components/std-schedule/std-schedule.component";
import { DLscheduleComponent } from "./components/dlschedule/dlschedule.component";
import { StdScheduleAddComponent } from "./components/std-schedule-add/std-schedule-add.component";
import { LoginComponent } from "./components/login/login.component";
import { DlClassAddComponent } from "./components/dl-class-add/dl-class-add.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { StdRequestLeaveComponent } from "./components/std-request-leave/std-request-leave.component";
import { WebsocketComponent } from "./components/websocket/websocket.component";
import { FullcalenderComponent } from "./components/fullcalender/fullcalender.component";
import { AdminComponent } from "./components/admin/admin.component";
//user authentication
import { AuthGuard } from "./services/auth.guard";
import { LogoutComponent } from "./components/logout/logout.component";
import { StdWorkersAddComponent } from "./components/std-workers-add/std-workers-add.component";
import { StdWorkersComponent } from "./components/std-workers/std-workers.component";
import { DlAssignClassComponent } from "./components/dl-assign-class/dl-assign-class.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },

  // {
  //   path: "admin",
  //   component: AdminComponent,
  //   canActivate: [AuthGuard]
  //   // data: { roles: [Role.Admin] }
  // },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "",
    component: LoginComponent
  },

  // otherwise redirect to home
  // { path: "**", redirectTo: "login" },
  // { path: "login", component: LoginComponent },
  // { path: "", component: LoginComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        canActivateChild: [AuthGuard],
        children: [
          {
            path: "DLSchedule",
            component: DLscheduleComponent
          },
          {
            path: "DLadd",
            component: DlClassAddComponent
          },
          {
            path: "StdWorker",
            component: StdWorkersComponent
          },
          {
            path: "addStdWorker",
            component: StdWorkersAddComponent
          },
          {
            path: "leaveRequest",
            component: StdRequestLeaveComponent
          },
          {
            path: "dlAssign",
            component: DlAssignClassComponent
          },
          {
            path: "logout",
            component: LogoutComponent
          }
         
        ]
      }
    ]
  },
  {
    path: "student",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        canActivateChild: [AuthGuard],
        children: [
          {
            path: "stdSchedule",
            component: StdScheduleComponent
          },
          {
            path: "stdAdd",
            component: StdScheduleAddComponent
          },

          {
            path: "leaveRequest",
            component: StdRequestLeaveComponent
          },

          {
            path: "logout",
            component: LogoutComponent
          }
        ]
      }
    ]
  },

  { path: "scheduler", component: StdSchedulerComponent },
  { path: "fullcalender", component: FullcalenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

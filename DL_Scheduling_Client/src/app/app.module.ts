import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatSnackBarModule,
  MatTableModule,
  MatFormFieldModule,
  MatRadioModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule
  
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule, NgbTimepickerModule } from "@ng-bootstrap/ng-bootstrap";
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from  '@angular/material';


//jqwidget
import { jqxBarGaugeModule } from "jqwidgets-ng/jqxbargauge";
import { jqxSchedulerModule } from "jqwidgets-ng/jqxscheduler";

import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StdSchedulerComponent } from './components/std-scheduler/std-scheduler.component';
// import { HomeComponent } from "./components/home/home.component";
import { TrialtableComponent } from "./components/trialtable/trialtable.component";
import { DLscheduleComponent } from "./components/dlschedule/dlschedule.component";
import { StdScheduleComponent } from "./components/std-schedule/std-schedule.component";
import { StdScheduleAddComponent } from "./components/std-schedule-add/std-schedule-add.component";
import { LoginComponent } from './components/login/login.component';
import { DlClassAddComponent } from './components/dl-class-add/dl-class-add.component';
import { StdRequestLeaveComponent } from './components/std-request-leave/std-request-leave.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserService } from './services/user.service';
import { StdUnavailabilityService } from './services/std-unavailability.service';



@NgModule({
  declarations: [
    AppComponent,
    // jqxSchedulerComponent,
    StdSchedulerComponent,
    // HomeComponent,
    TrialtableComponent,
    DLscheduleComponent,
    StdScheduleComponent,
    StdScheduleAddComponent,
    LoginComponent,
    DlClassAddComponent,
    StdRequestLeaveComponent,
    UserListComponent,
    UserFormComponent,
  ],
  entryComponents: [
    StdScheduleAddComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSnackBarModule,
    AppRoutingModule,
    jqxBarGaugeModule,
    jqxSchedulerModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    NgbTimepickerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [UserService, StdUnavailabilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}

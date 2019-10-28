import { Component } from "@angular/core";
import { StdScheduleAddComponent } from "./../std-schedule-add/std-schedule-add.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import timeGridPlugin from '@fullcalendar/timegrid';
import {StdUnavailabilityService} from '../../services/std-unavailability.service';
import {calendarEvent} from '../../models/calendarEvent';



@Component({
  selector: "app-std-schedule",
  templateUrl: "./std-schedule.component.html",
  styleUrls: ["./std-schedule.component.scss"]
})
export class StdScheduleComponent {
 
  constructor(public dialog: MatDialog, private stdService: StdUnavailabilityService) {}

  eventSources:calendarEvent[];

  ngOnInit() {
    this.stdService.getData().subscribe((events:calendarEvent[])=> {
    this.eventSources=events;
    console.log(events)});

  }

  calendarPlugins = [timeGridPlugin];

  openDialog(): void {
    const dialogRef = this.dialog.open(StdScheduleAddComponent, {
      width: "600px"
    });
  }
}

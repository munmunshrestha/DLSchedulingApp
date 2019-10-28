import { Component, OnInit } from '@angular/core';
import {DlClassAddComponent} from '../dl-class-add/dl-class-add.component';
import {MatDialog} from '@angular/material/dialog';
import timeGridPlugin from '@fullcalendar/timegrid';
import {calendarEvent} from '../../models/calendarEvent';
import {DlScheduleService} from '../../services/dl-schedule.service';


@Component({
  selector: 'app-dlschedule',
  templateUrl: './dlschedule.component.html',
  styleUrls: ['./dlschedule.component.scss']
})
export class DLscheduleComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private dlService:DlScheduleService) {}

    eventSources:calendarEvent[];

    ngOnInit() {
      this.dlService.getData().subscribe((events:calendarEvent[])=> {
      this.eventSources=events;
      console.log(events)});
  
    }
  
    calendarPlugins = [timeGridPlugin];

  openDialog(): void {
    const dialogRef = this.dialog.open(DlClassAddComponent, {
      width: "600px"
    });
  }

}

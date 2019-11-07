import { Component, OnInit } from "@angular/core";
import { DlClassAddComponent } from "../dl-class-add/dl-class-add.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import timeGridPlugin from "@fullcalendar/timegrid";
import { calendarEvent } from "../../models/calendarEvent";
import { DlScheduleService } from "../../services/dl-schedule.service";
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { timeSelected } from '../std-schedule/std-schedule.component';

@Component({
  selector: "app-dlschedule",
  templateUrl: "./dlschedule.component.html",
  styleUrls: ["./dlschedule.component.scss"]
})
export class DLscheduleComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private dlService: DlScheduleService,
    private router: Router
  ) {}
  private dialogRef: MatDialogRef<DlClassAddComponent>;


  data: timeSelected[] = [
    { id: 1, value: "8:00 AM", selected: false },
    { id: 2, value: "8:30 AM", selected: false },
    { id: 3, value: "9:00 AM", selected: false },
    { id: 4, value: "9:30 AM", selected: false },
    { id: 5, value: "10:00 AM", selected: false },
    { id: 6, value: "10:30 AM", selected: false },
    { id: 7, value: "11:00 AM", selected: false },
    { id: 8, value: "11:30 AM", selected: false },
    { id: 9, value: "12:00 PM", selected: false },
    { id: 10, value: "12:30 PM", selected: false },
    { id: 12, value: "1:00 PM", selected: false },
    { id: 13, value: "...", selected: false },
    { id: 14, value: "9:00 PM", selected: false }

    // { id: 13, value: "1:30 PM", selected: false },
    // { id: 14, value: "2:00 PM", selected: false },
    // { id: 15, value: "2:30 PM", selected: false },
    // { id: 16, value: "3:00 PM", selected: false },
    // { id: 17, value: "3:30 PM", selected: false },
    // { id: 18, value: "4:00 PM", selected: false },
    // { id: 19, value: "4:30 PM", selected: false },
    // { id: 20, value: "5:00 PM", selected: false },
    // { id: 21, value: "5:30 PM", selected: false },
    // { id: 22, value: "6:00 PM", selected: false },
    // { id: 23, value: "7:00 PM", selected: false },
    // { id: 24, value: "7:30 PM", selected: false },
    // { id: 25, value: "8:00 PM", selected: false },
    // { id: 26, value: "8:30 PM", selected: false },
    // { id: 27, value: "9:00 PM", selected: false }
  ];


  dataSource = new MatTableDataSource(this.data);

  ngOnInit() {
    // this.dlService.getData().subscribe((events: calendarEvent[]) => {
    //   this.eventSources = events;
    // });
  }

  calendarPlugins = [timeGridPlugin];

  openDialog(): void {
    this.dialogRef = this.dialog.open(DlClassAddComponent, {
      width: "600px"
    });
    this.dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  onEventClick(event) {
    console.log(event);
  }

  openAssignPage() {
    this.router.navigate(["admin/dlAssign"]);
  }


}

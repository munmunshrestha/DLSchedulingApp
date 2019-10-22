import { Component } from "@angular/core";
import { StdScheduleAddComponent } from "./../std-schedule-add/std-schedule-add.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";


export interface time_weekday {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

const ELEMENT_DATA: time_weekday[] = [
  {
    time: "8:00 AM",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: ""
  }
];

@Component({
  selector: "app-std-schedule",
  templateUrl: "./std-schedule.component.html",
  styleUrls: ["./std-schedule.component.scss"]
})
export class StdScheduleComponent {
 

  weekDays = [
    { name: "Monday" },
    { name: "Tuesday" },
    { name: "Wednesday" },
    { name: "Thursday" },
    { name: "Friday" }
  ];

  displayedColumns: string[] = [
    "time",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
  ];
  dataSource = ELEMENT_DATA; //new MatTableDataSource<PeriodicElement>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(StdScheduleAddComponent, {
      width: "600px"
    });
  }
}

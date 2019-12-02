import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DlScheduleService } from "src/app/services/dl-schedule.service";
import { MatTableDataSource, MatDialog, MatDialogRef, MatDialogConfig } from "@angular/material";
import { Router } from "@angular/router";
import { DlClassAddComponent } from "../dl-class-add/dl-class-add.component";

export interface weekdays {
  id: number;
  value: string;
}

export interface timeSelected {
  id: number;
  value: string;
}

@Component({
  selector: "app-dlschedule",
  templateUrl: "./dlschedule.component.html",
  styleUrls: ["./dlschedule.component.scss"]
})
export class DLscheduleComponent implements OnInit {
  constructor(
    private dlService: DlScheduleService,
    public dialog: MatDialog,
    private router: Router
  ) {}
  private dialogRef: MatDialogRef<DlClassAddComponent>;
  day: string;
  weekdays = [
    { id: 0, value: "Monday" },
    { id: 1, value: "Tuesday" },
    { id: 2, value: "Wednesday" },
    { id: 3, value: "Thursday" },
    { id: 4, value: "Friday" }
  ];
  timeData: timeSelected[] = [
    { id: 0, value: "" },
    { id: 1, value: "8:00 AM" },
    // { id: 2, value: "8:30" },
    { id: 3, value: "9:00 AM" },
    // { id: 4, value: "9:30 AM" },
    { id: 5, value: "10:00 AM" },
    // { id: 6, value: "10:30 AM" },
    { id: 7, value: "11:00 AM" },
    // { id: 8, value: "11:30 AM" },
    { id: 9, value: "12:00 PM" },
    // { id: 10, value: "12:30 PM" },
    { id: 11, value: "1:00 PM" },
    // { id: 12, value: "1:30 PM" },
    { id: 13, value: "2:00 PM" },
    // { id: 14, value: "2:30 PM" },
    { id: 15, value: "3:00 PM" },
    // { id: 16, value: "3:30 PM" },
    { id: 17, value: "4:00 PM" },
    // { id: 18, value: "4:30 PM" },
    { id: 19, value: "5:00 PM" },
    // { id: 20, value: "5:30 PM" },
    { id: 21, value: "6:00 PM" },
    // { id: 21, value: "6:30 PM" },
    { id: 23, value: "7:00 PM" },
    // { id: 24, value: "7:30 PM" },
    { id: 25, value: "8:00 PM" },
    // { id: 26, value: "8:30 PM" },
    { id: 27, value: "9:00 PM" }
  ];
  selected = new FormControl(0);

  // dataArray: number[][]=[[],[],[],[],[],[]];
  dataArray: any[][];
  headers: Array<String> = ["Time"];
  noOfLocations: number;
  schedule: any;

  //mattable
  displayedColumns: string[] = [
    "time",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
  ];
  // dataSource = new MatTableDataSource(this.data);

  ngOnInit() {
    this.dataArray = [];
    // console.log(this.selected.value);
    this.day = this.weekdays[this.selected.value].value;
    this.dlService.getDlLocations().subscribe(data => {
      // console.log(Object.values(data));
      for (let x of Object.values(data)) {
        this.headers.push(x);
      }
      this.noOfLocations = Object.values(data).length;
      console.log(this.noOfLocations);
      //initialize 2d array
      for (let x = 0; x < this.noOfLocations; x++) {
        this.dataArray[x] = [];
      }
      //initialize span size
      for (let i = 0; i < this.noOfLocations; i++) {
        let locationval = {
          grid:2,
          display: Object.values(data)[i],
        };

        this.dataArray[i][0] = locationval;
        for (let j = 1; j < (this.timeData.length*2)-1; j++) {
          this.dataArray[i][j] = "";
        }
      }

      this.dlService.getSchedulebyDay(this.day).subscribe(data => {
        console.log(data);
        this.schedule = data;
        let x = 0;

        Object.values(data).forEach(locationVal => {
          if (locationVal.length != 0) {
            // console.log("length= "+Object.values(locationVal).length);
            Object.values(locationVal).forEach(rec => {
              //parsing string to int
              // console.log((+i)<=(+j));
              console.log("rec " + rec);
              let noOfGrid = +rec["endTime"] - +rec["startTime"];
              // for (let i = +rec["startTime"]; i <noOfGrid; i++) {
              //   // this.dataArray[x][i]=1;
              //   this.dataArray[x].splice(i, 1);
              // }

              //change span size for class rows and delete extra elements
              this.dataArray[x].splice(+rec["startTime"], noOfGrid - 1);

              let val = {
                course:rec["course"],
                location:rec["location"],
                startTime:rec["startTime"],
                endTime:rec["endTime"],
                
                grid: noOfGrid,
                display: rec["course"],
                name: rec["name"],
                dl:"true"
              };
              this.dataArray[x][+rec["startTime"]] = val;
            });
          }
          x++;
        });
        console.log(data);

        console.log(this.dataArray);
        console.log("y");
      });
    });
  }
  change($event) {
    this.selected.setValue($event);
    console.log(this.selected.value);
    // this.day = this.weekdays[this.selected.value].value;
    this.ngOnInit();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="600px";

    this.dialogRef = this.dialog.open(DlClassAddComponent,dialogConfig);
    this.dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  openDialog2(val): void {
    console.log(val);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        course: val.course,
        location: val.location,
        startTime: val.startTime,
        endTime: val.endTime,
    };
    dialogConfig.width="600px";

    // this.dialogRef = this.dialog.open(DlClassAddComponent,dialogConfig);
    // this.dialogRef.afterClosed().subscribe(() => {
    //   this.ngOnInit();
    // });
  }

  onEventClick(event) {
    console.log(event);
  }

  openAssignPage() {
    this.router.navigate(["admin/dlAssign"]);
  }

  onClickCell(display){
    console.log(display);
  }
}

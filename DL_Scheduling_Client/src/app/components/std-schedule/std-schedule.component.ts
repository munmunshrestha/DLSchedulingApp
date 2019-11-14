import { Component } from "@angular/core";
import { StdScheduleAddComponent } from "./../std-schedule-add/std-schedule-add.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import timeGridPlugin from "@fullcalendar/timegrid";
import { StdUnavailabilityService } from "../../services/std-unavailability.service";
// import {calendarEvent} from '../../models/calendarEvent';
import { Time } from "@angular/common";
import { MatTableDataSource } from "@angular/material";

export interface timeSelected {
  id: number;
  value: string;
  Monday: number;
  Tuesday:boolean;
}

// export interface time_weekday {
//   timeSelected:
// }

// const ELEMENT_DATA: time_weekday[] = [
//   {
//     time: "8:00 AM",
//     monday: "",
//     tuesday: "",
//     wednesday: "",
//     thursday: "",
//     friday: ""
//   }
// ];

// const ELEMENT_DATA = [
//   {
//     day: 1,
//     timeSelected: [
//       { id: 1, value: "8:00 AM", selected: false },
//       { id: 2, value: "8:30 AM", selected: false },
//       { id: 3, value: "9:00 AM", selected: false },
//       { id: 4, value: "9:30 AM", selected: false },
//       { id: 5, value: "10:00 AM", selected: false },
//       { id: 6, value: "10:30 AM", selected: false },
//       { id: 7, value: "11:00 AM", selected: false },
//       { id: 8, value: "11:30 AM", selected: false },
//       { id: 9, value: "12:00 PM", selected: false },
//       { id: 10, value: "12:30 PM", selected: false },
//       { id: 12, value: "1:00 PM", selected: false },
//       { id: 13, value: "1:30 PM", selected: false },
//       { id: 14, value: "2:00 PM", selected: false },
//       { id: 15, value: "2:30 PM", selected: false },
//       { id: 16, value: "3:00 PM", selected: false },
//       { id: 17, value: "3:30 PM", selected: false },
//       { id: 18, value: "4:00 PM", selected: false },
//       { id: 19, value: "4:30 PM", selected: false },
//       { id: 20, value: "5:00 PM", selected: false },
//       { id: 21, value: "5:30 PM", selected: false },
//       { id: 22, value: "6:00 PM", selected: false },
//       { id: 23, value: "7:00 PM", selected: false },
//       { id: 24, value: "7:30 PM", selected: false },
//       { id: 25, value: "8:00 PM", selected: false },
//       { id: 26, value: "8:30 PM", selected: false },
//       { id: 27, value: "9:00 PM", selected: false }
//     ]
//   }
// ];

@Component({
  selector: "app-std-schedule",
  templateUrl: "./std-schedule.component.html",
  styleUrls: ["./std-schedule.component.scss"]
})
export class StdScheduleComponent {
  constructor(
    public dialog: MatDialog,
    private stdService: StdUnavailabilityService
  ) {}
  private dialogRef: MatDialogRef<StdScheduleAddComponent>;

 
  // 0=nothing, 1=stdSchedule, 2=DLclass
  data: timeSelected[] = [
    { id: 1, value: "8:00 AM", Monday: 0, Tuesday:false },
    { id: 2, value: "8:30 AM", Monday: 0, Tuesday:false },
    { id: 3, value: "9:00 AM", Monday: 0, Tuesday:false},
    { id: 4, value: "9:30 AM", Monday: 0, Tuesday:false},
    { id: 5, value: "10:00 AM", Monday: 0, Tuesday:false},
    { id: 6, value: "10:30 AM", Monday: 0, Tuesday:false},
    { id: 7, value: "11:00 AM", Monday: 0, Tuesday:false},
    { id: 8, value: "11:30 AM", Monday: 0, Tuesday:false},
    { id: 9, value: "12:00 PM", Monday: 0, Tuesday:false},
    { id: 10, value: "12:30 PM", Monday: 0, Tuesday:false},
    { id: 11, value: "1:00 PM", Monday: 0, Tuesday:false},
    { id: 12, value: "1:30 PM", Monday: 0 , Tuesday:false},
    { id: 13, value: "2:00 PM", Monday: 0 , Tuesday:false},
    { id: 14, value: "2:30 PM", Monday: 0 , Tuesday:false},
    { id: 15, value: "3:00 PM", Monday: 0 , Tuesday:false},
    { id: 16, value: "3:30 PM", Monday: 0 , Tuesday:false},
    { id: 17, value: "4:00 PM", Monday: 0 , Tuesday:false},
    { id: 18, value: "4:30 PM", Monday: 0 , Tuesday:false},
    { id: 19, value: "5:00 PM", Monday: 0 , Tuesday:false},
    { id: 20, value: "5:30 PM", Monday: 0 , Tuesday:false},
    { id: 21, value: "6:00 PM", Monday: 0 , Tuesday:false},
    { id: 21, value: "7:00 PM", Monday: 0 , Tuesday:false},
    { id: 23, value: "7:30 PM", Monday: 0 , Tuesday:false},
    { id: 24, value: "8:00 PM", Monday: 0 , Tuesday:false},
    { id: 25, value: "8:30 PM", Monday: 0 , Tuesday:false},
    { id: 26, value: "9:00 PM", Monday: 0 , Tuesday:false}
  ];

  // dayTimeData: any[5] = [this.data, this.data, this.data, this.data, this.data];

  displayedColumns: string[] = [
    "time",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
  ];
  dataSource = new MatTableDataSource(this.data); //= this.data; //new MatTableDataSource<PeriodicElement>();
  // dataSource2= new MatTableDataSource()

  // dataToDisplay:ELEMENT_DATA[]
  // displayTime = new Date();

  // getTimeBlock(){
  //  this.displayTime={hours:8, minutes:30}
  // }

  day: any;
  start:number;
  end:number;
  isDL:number;
  ngOnInit() {
    this.stdService.getData().subscribe(events => {
      // console.log(events['Monday'][0]['startTime']);
      //for each day
      for (var eachday in events) {
      console.log(events[eachday]);
        this.day=events[eachday];
        // //for each entry for day
        for (var entryNum in this.day) {
          this.start=this.day[entryNum]['startTime']
          this.end=this.day[entryNum]['endTime']
          this.isDL=this.day[entryNum]['isDL']
          console.log(entryNum + " start: "+this.start+ " end: "+this.end);
          console.log(this.data[this.start-1]['Monday']);
          for (let i=this.start-1; i<=this.end-1; i++){
            if (this.isDL==0){
              this.data[i][eachday]=1;
            }
            else if(this.isDL==1){
              this.data[i][eachday]=2;
            }
          }
          //for each data
          // for (var item in this.data){
          //   if (item['id']==this.start)

          // }
        }
      }
      console.log(this.data);
    });
  }

  // calendarPlugins = [timeGridPlugin];

  openDialog(): void {
    this.dialogRef = this.dialog.open(StdScheduleAddComponent, {
      width: "600px"
    });
    this.dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

}

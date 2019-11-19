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
import { dlClassInfo } from "src/app/models/dl-class-info";

export interface timeSelected {
  id: number;
  value: string;
  Monday: dlClassInfo;
  // Tuesday: number;
  // Wednesday: number;
  // Thursday: number;
  // Friday: number;
}

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
    {
      id: 1,
      value: "8:00 AM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 2,
      value: "8:30 AM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 3,
      value: "9:00 AM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      //, Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 4,
      value: "9:30 AM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 5,
      value: "10:00 AM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 6,
      value: "10:30 AM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 7,
      value: "11:00 AM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 8,
      value: "11:30 AM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 9,
      value: "12:00 PM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 10,
      value: "12:30 PM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 11,
      value: "1:00 PM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 12,
      value: "1:30 PM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 14,
      value: "2:30 PM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 14,
      value: "2:30 PM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 13,
      value: "2:00 PM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 14,
      value: "2:30 PM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    },
    {
      id: 15,
      value: "3:00 PM",
      Monday: {
        id: null,
        location: null,
        course: null,
        start: null,
        end: null,
        selected: false,
        day: null
      }
      // ,
      // Tuesday: 0,
      // Wednesday: 0,
      // Thursday: 0,
      // Friday: 0
    }
    // {
    //   id: 16,
    //   value: "3:30 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 17,
    //   value: "4:00 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 18,
    //   value: "4:30 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 19,
    //   value: "5:00 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 20,
    //   value: "5:30 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 21,
    //   value: "6:00 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 21,
    //   value: "7:00 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 23,
    //   value: "7:30 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 24,
    //   value: "8:00 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 25,
    //   value: "8:30 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // },
    // {
    //   id: 26,
    //   value: "9:00 PM",
    //   Monday: 0,
    //   Tuesday: 0,
    //   Wednesday: 0,
    //   Thursday: 0,
    //   Friday: 0
    // }

    // { id: 3, value: "9:00 AM", Monday: 0, Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 4, value: "9:30 AM", Monday: 0, Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 5, value: "10:00 AM", Monday: 0, Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 6, value: "10:30 AM", Monday: 0, Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 7, value: "11:00 AM", Monday: 0, Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 8, value: "11:30 AM", Monday: 0, Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 9, value: "12:00 PM", Monday: 0, Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 10, value: "12:30 PM", Monday: 0, Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 11, value: "1:00 PM", Monday: 0, Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 12, value: "1:30 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 14, value: "2:30 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 14, value: "2:30 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 13, value: "2:00 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 14, value: "2:30 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 15, value: "3:00 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 16, value: "3:30 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 17, value: "4:00 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 18, value: "4:30 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 19, value: "5:00 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 20, value: "5:30 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 21, value: "6:00 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 21, value: "7:00 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 23, value: "7:30 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 24, value: "8:00 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 25, value: "8:30 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0},
    // { id: 26, value: "9:00 PM", Monday: 0 , Tuesday:0, Wednesday:0, Thursday:0, Friday:0}
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
  start: number;
  end: number;
  isDL: number;
  ngOnInit() {
    this.stdService.getData().subscribe(events => {
      // console.log(events['Monday'][0]['startTime']);
      //for each day
      // for (var eachday in events) {
      console.log(events["Monday"]);
      this.day = events["Monday"];
      // //for each entry for day
      for (var entryNum in this.day) {
        this.start = this.day[entryNum]["startTime"];
        this.end = this.day[entryNum]["endTime"];
        this.isDL = this.day[entryNum]["isDL"];
        console.log(entryNum + " start: " + this.start + " end: " + this.end);
        console.log(this.data[this.start - 1]["Monday"]);
        for (let i = this.start - 1; i <= this.end - 1; i++) {
          if (this.isDL == 0) {
            this.data[i]["Monday"]["location"] = "locationclass";
          } else {
            this.data[i]["Monday"]["location"] = "locationdl";
          }
          this.data[i]["Monday"]["selected"] = true;
        }

        //for each data
        // for (var item in this.data){
        //   if (item['id']==this.start)

        // }
      }
      // let myTable = document.querySelector("myTable");
      // myTable.rows[0].cells[1].innerHTML = "Hello";
      // }
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

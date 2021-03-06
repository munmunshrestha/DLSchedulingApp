import { Component, HostListener } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { StdUnavailabilityService } from "src/app/services/std-unavailability.service";

export interface scheduleByWeekday {
  noOfGrid: number;
  display: string;
}

export interface timeSelected {
  id: number;
  value: string;
}

@Component({
  selector: "app-trialtable",
  templateUrl: "./trialtable.component.html",
  styleUrls: ["./trialtable.component.scss"]
})
export class TrialtableComponent {
  constructor(private stdService: StdUnavailabilityService) {}

  timeData: timeSelected[] = [
    { id: 0, value: "" },
    { id: 1, value: "8:00 AM" },
    { id: 2, value: "8:30 AM" },
    { id: 3, value: "9:00 AM" },
    { id: 4, value: "9:30 AM" },
    { id: 5, value: "10:00 AM" },
    { id: 6, value: "10:30 AM" },
    { id: 7, value: "11:00 AM" },
    { id: 8, value: "11:30 AM" },
    { id: 9, value: "12:00 PM" },
    { id: 10, value: "12:30 PM" },
    { id: 11, value: "1:00 PM" },
    { id: 12, value: "1:30 PM" },
    { id: 13, value: "2:00 PM" },
    { id: 14, value: "2:30 PM" },
    { id: 15, value: "3:00 PM" },
    { id: 16, value: "3:30 PM" },
    { id: 17, value: "4:00 PM" },
    { id: 18, value: "4:30 PM" },
    { id: 19, value: "5:00 PM" },
    { id: 20, value: "5:30 PM" },
    { id: 21, value: "6:00 PM" },
    { id: 21, value: "6:30 PM" },
    { id: 23, value: "7:00 PM" },
    { id: 24, value: "7:30 PM" },
    { id: 25, value: "8:00 PM" },
    { id: 26, value: "8:30 PM" },
    { id: 27, value: "9:00 PM" }
  ];

  // monday: scheduleByWeekday[];
  // tuesday: scheduleByWeekday[];
  // wednesday: scheduleByWeekday[];
  // thursday: scheduleByWeekday[];
  // friday: scheduleByWeekday[];
  dataArray: any[][] = [[], [], [], [], []];

  ngOnInit() {
    this.stdService.getData().subscribe(data => {
      console.log("data= "+data);
      let y = 0;
      //setting 1st element of each array in dataArray to weekday
      Object.keys(data).forEach(eachDay => {
        console.log("eachDay= "+eachDay);
        let locationval = {
          display: eachDay
        };
        this.dataArray[y++][0] = locationval;
      });
      //initializing remaining elements
      for (let i = 0; i < 5; i++) {
        for (let j = 1; j < this.timeData.length; j++) {
          this.dataArray[i][j] = "";
        }
      }
      // this.schedule = data;
      let x = 0;

      Object.values(data).forEach(eachDayData => {
        console.log("eachDayData= "+eachDayData);
          if (eachDayData.length != 0) {
            // console.log("length= "+eachSchedule.length);
          
            eachDayData.forEach(rec => {
              //parsing string to int
              console.log("rec " + rec);
              let noOfGrid = +rec["endTime"] - +rec["startTime"];

              //change span size for class rows and delete extra elements
              this.dataArray[x].splice(+rec["startTime"], noOfGrid - 1);

              let val = {
                grid: noOfGrid,
                display: rec["location"],
                // name: rec["name"],
                isDL:rec["isDL"],
                isClass:rec["isClass"]
              };
              this.dataArray[x][+rec["startTime"]] = val;
            });
          }
          x++;
        
        // console.log(data);

        // console.log(this.dataArray);
        // console.log("y");
      });
    });
  }
}

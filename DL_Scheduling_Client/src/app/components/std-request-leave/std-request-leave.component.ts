import { Component, OnInit, ViewChild } from "@angular/core";
import { StdUnavailabilityService } from "src/app/services/std-unavailability.service";
import { MatDatepickerInputEvent, MatInput } from "@angular/material";
import { FormControl } from "@angular/forms";
import { dlClassInfo } from "src/app/models/dl-class-info";
import { LeaveRequestService } from "src/app/services/leave-request.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-std-request-leave",
  templateUrl: "./std-request-leave.component.html",
  styleUrls: ["./std-request-leave.component.scss"]
})
export class StdRequestLeaveComponent implements OnInit {
  constructor(
    private stdService: StdUnavailabilityService,
    private leaveService: LeaveRequestService,
  ) {}
  week = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  minDate = new Date(2019, 7, 23);
  maxDate = new Date(2019, 11, 13);
  date: Date;
  classes: dlClassInfo[];
  showClasses: boolean;
  events: string[];
  selectedClass: Array<number> = [];
  selectedDay: any;
  selectedDate: any;
  selectedMnth: any;
  selectedYear: any;
  finalDate: string;
  requested:boolean;
  message:string;

  // classes:string[];
  ngOnInit() {
    this.events = [];
    this.showClasses = false;
  }

  @ViewChild("input", { read: MatInput, static: false }) input: MatInput;
  ngAfterViewInit() {}

  reset() {
    this.input.value = "";
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.selectedDay = this.week[event.value.getDay()];
    this.selectedDate = event.value.getDate();
    this.selectedMnth = event.value.getMonth();
    this.selectedYear = event.value.getUTCFullYear();
    this.finalDate =
      this.selectedYear + "-" + this.selectedMnth + "-" + this.selectedDate;

    this.showClasses = true;
    // this.classes=['one', 'two'];
    this.stdService.getAssignedClass(this.selectedDay).subscribe(data => {
      this.classes = data;
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.classes[i].selected = false;
      }
    });
  }

  request() {
    // this.stdService.getAssignedClass(this.selectedDay).subscribe(data => {
    this.classes.forEach(element => {
      if (element.selected) {
        this.selectedClass.push(element.id);
        console.log(element.id);
        console.log(this.selectedClass);
      }
    });
    this.leaveService.save(this.finalDate, this.selectedClass).subscribe(data => {
      if (data.success) {
        this.reset();
        this.requested=true;
        this.message=data.message;
        this.ngOnInit();
      } else {
        window.alert(data.message);
      }
    });
  }
}

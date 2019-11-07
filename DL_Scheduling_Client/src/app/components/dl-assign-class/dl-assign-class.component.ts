import { Component, OnInit } from "@angular/core";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { ActivatedRoute, Router } from "@angular/router";
import { DlScheduleService } from "src/app/services/dl-schedule.service";
import { dlClassInfo } from "src/app/models/dl-class-info";
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: "app-dl-assign-class",
  templateUrl: "./dl-assign-class.component.html",
  styleUrls: ["./dl-assign-class.component.scss"]
})
export class DlAssignClassComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dlService: DlScheduleService
  ) {}

  dlClasses: dlClassInfo[];
  selectedDay:string;
  selectedCourse:string;
  weekdays:string[]=[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];

  show:boolean;

  ngOnInit() {
    this.show=false;
  }

  ListDLClasses(){
    // let currentDay = this.route.snapshot.paramMap.get("day");
    this.dlService.getDataForDay(this.selectedDay).subscribe(data => {
      this.dlClasses = data;
      console.log(this.dlClasses);
      this.show=true;

      // let dataSource = new MatTableDataSource(this.dlClasses); 
    });
  }

  Assign(){

  }
  // liscense="GPL-My-Project-Is-Open-Source";
  // calendarPlugins=[ resourceTimelinePlugin, interactionPlugin ];
  // view="resourceTimelineDay";
  // resourceText= "Student Workers";
  // aspectRatio= 1.5;
}

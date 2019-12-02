import { Component, OnInit } from "@angular/core";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { ActivatedRoute, Router } from "@angular/router";
import { DlScheduleService } from "src/app/services/dl-schedule.service";
import { dlClassInfo } from "src/app/models/dl-class-info";
import { MatTableDataSource } from "@angular/material";
import { SpawnSyncOptions } from "child_process";
import { dlAvailableStudent } from "src/app/models/dl-availableStudents";
import { Location } from "@angular/common";
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: "app-dl-assign-class",
  templateUrl: "./dl-assign-class.component.html",
  styleUrls: ["./dl-assign-class.component.scss"],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DlAssignClassComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dlService: DlScheduleService,
    private _location: Location
  ) {}

  dlClasses: dlClassInfo[];
  selectedDay: string;
  selectedCourse: string;
  weekdays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  showTable: boolean;
  showDetails: boolean;
  dataSource: any;
  expandedElement: dlClassInfo| null;
  displayedColumns: string[] = ["course", "location"];

  ngOnInit() {
    this.showTable = false;
    this.showDetails = false;
  }

  ListDLClasses() {
    this.showDetails = false;
    // let currentDay = this.route.snapshot.paramMap.get("day");
    this.dlService.getClassForDay(this.selectedDay).subscribe(data => {
      this.dlClasses = data;
      console.log(this.dlClasses);
      this.showTable = true;
      this.dataSource = this.dlClasses;
      // let dataSource = new MatTableDataSource(this.dlClasses);
    });
  }

  values: any;
  students: dlAvailableStudent[];
  selectedStudent: any;
  user_id: number;

  onRowClick(dl) {
    console.log(dl);
    this.selectedStudent = "";
    this.dlService
      .getAvailableStudents(this.selectedDay, dl.start, dl.end)
      .subscribe(data => {
        this.showDetails = true;
        this.students = data;
        console.log(this.students);

        this.values = dl;
      });
   
  }

  Assign() {
    this.students.forEach(element => {
      if (element.name == this.selectedStudent) {
        this.user_id = element.id;
      }
    });
    console.log(
      this.user_id,
      this.values.course,
      this.values.location,
      this.values.start,
      this.values.end,
      this.selectedDay,
      1,
      1
    );
    this.dlService
      .assignDLClass(
        this.user_id,
        this.values.id,
        this.values.course,
        this.values.location,
        this.values.start,
        this.values.end,
        this.selectedDay,
        1,
        1
      )
      .subscribe(data => {
        console.log(data.message);
        this.ListDLClasses();
        this.showDetails = false;
      });
  }

  backClicked() {
    this._location.back();
  }
  // liscense="GPL-My-Project-Is-Open-Source";
  // calendarPlugins=[ resourceTimelinePlugin, interactionPlugin ];
  // view="resourceTimelineDay";
  // resourceText= "Student Workers";
  // aspectRatio= 1.5;
}

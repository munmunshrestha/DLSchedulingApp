import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import {DlScheduleService} from '../../services/dl-schedule.service';
import {dlSchedule} from '../../models/dl-schedule';

@Component({
  selector: "app-dl-class-add",
  templateUrl: "./dl-class-add.component.html",
  styleUrls: ["./dl-class-add.component.scss"]
})
export class DlClassAddComponent {
 //for AM/PM of timepicker
 meridian = true;
 // stdUnavailability: stdUnavailability;
 //dialog from Add Schedule button in MySchedule page
 form: FormGroup;
 startTimeJson: any;
 endTimeJson: any;
 weekDays: any = [
   { id: 1, checked: false, name: "Monday" },
   { id: 2, checked: false, name: "Tuesday" },
   { id: 3, checked: false, name: "Wednesday" },
   { id: 4, checked: false, name: "Thursday" },
   { id: 5, checked: false, name: "Friday" }
 ];

 resetStartTime() {
   this.startTimeJson = {
     hour: undefined,
     minute: undefined,
     second: undefined
   };
 }
 resetEndTime() {
   this.endTimeJson = {
     hour: undefined,
     minute: undefined,
     second: undefined
   };
 }

 resetWeekDays() {
   this.weekDays.forEach(element => {
     element.checked = false;
   });
 }
 selectedDays: String[];
 dlSchedule: dlSchedule;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<DlClassAddComponent>,
    private dlService: DlScheduleService) 
    {
      this.dlSchedule= new dlSchedule();
    }

  // to close dialog box

  public cancel() {
    this.dialogRef.close();
  }

  startTimeDB: String;
  endTimeDB: String;

  onSubmit() {
    console.log(this.startTimeJson);
    this.startTimeDB = this.startTimeJson.hour
      .toString()
      .padStart(2, "0")
      .concat(
        ":".concat(
          this.startTimeJson.minute
            .toString()
            .padStart(2, "0")
            .concat(
              ":".concat(this.startTimeJson.second.toString().padStart(2, "0"))
            )
        )
      );
    this.endTimeDB = this.endTimeJson.hour
      .toString()
      .padStart(2, "0")
      .concat(
        ":".concat(
          this.endTimeJson.minute
            .toString()
            .padStart(2, "0")
            .concat(
              ":".concat(this.endTimeJson.second.toString().padStart(2, "0"))
            )
        )
      );

    this.dlSchedule.start = this.startTimeDB;
    this.dlSchedule.end = this.endTimeDB;

    this.weekDays.forEach(element => {
      if (element.checked) {
        this.dlSchedule.day.push(element.id);
      }
    });


    //change to json type
    console.log(this.dlSchedule);
    
    // let std=JSON.stringify(this.dlSchedule) ;

    let start=this.dlSchedule.start;
    let end=this.dlSchedule.end;
    let course_id=this.dlSchedule.course_id;
    let day=this.dlSchedule.day;
    let location=this.dlSchedule.location;
    
    this.dlService.sendData(start, end,day,course_id,location ).subscribe(data => {
      if (data.success) {
        //redirect the person to admin
        this.cancel();
      } else {
        window.alert(data.message);
      }
    });
  }

  }

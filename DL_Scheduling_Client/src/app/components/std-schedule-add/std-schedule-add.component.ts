import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-std-schedule-add",
  templateUrl: "./std-schedule-add.component.html",
  styleUrls: ["./std-schedule-add.component.scss"]
})
export class StdScheduleAddComponent {
  //for AM/PM of timepicker
  meridian = true;

  //dialog from Add Schedule button in MySchedule page
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<StdScheduleAddComponent>) {}
  
    //to close dialog box
  public cancel() {
    this.dialogRef.close();
  }

  ngOnInit() {
    //to disable the location input
    this.form = this.fb.group({
      entryType: []
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-std-schedule-add",
  templateUrl: "./std-schedule-add.component.html",
  styleUrls: ["./std-schedule-add.component.scss"]
})
export class StdScheduleAddComponent {
  meridian = true;
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<StdScheduleAddComponent>) {}

  public cancel() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.form = this.fb.group({
      entryType: []
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dl-class-add",
  templateUrl: "./dl-class-add.component.html",
  styleUrls: ["./dl-class-add.component.scss"]
})
export class DlClassAddComponent {
  meridian = true;

  // dialog from Add DL Class button in DL Schedule page

  form: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<DlClassAddComponent>) {}

  // to close dialog box

  public cancel() {
    this.dialogRef.close();
  }

  ngOnInit() {}
}

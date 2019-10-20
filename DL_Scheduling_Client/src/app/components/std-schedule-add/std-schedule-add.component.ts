import { Component, OnInit, Output, EventEmitter, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialogRef, MatRadioChange, MatCheckboxChange } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import { StdUnavailabilityService } from "../../services/std-unavailability.service";
import { stdUnavailability } from "../../models/std-unavailability";

@Component({
  selector: "app-std-schedule-add",
  templateUrl: "./std-schedule-add.component.html",
  styleUrls: ["./std-schedule-add.component.scss"]
})
export class StdScheduleAddComponent implements OnInit {
  @Output()
  change: EventEmitter<MatRadioChange>;

  // @ViewChild('ref',{static:false}) ref;
  //for AM/PM of timepicker
  meridian = true;
  // stdUnavailability: stdUnavailability;
  //dialog from Add Schedule button in MySchedule page
  form: FormGroup;


  weekDays=[
    {checked:false, name: "Monday"},
    {checked:false, name:"Tuesday"},
    {checked:false, name:"Wednesday"},
    {checked:false, name:"Thursday"},
    {checked:false, name:"Friday"}
  ]

  selectedDays:String[];
  stdUnavailability: stdUnavailability;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private stdService: StdUnavailabilityService,
    private dialogRef: MatDialogRef<StdScheduleAddComponent>
  ) {
    this.stdUnavailability = new stdUnavailability();
  }

  //to close dialog box
  public cancel() {
    this.dialogRef.close();
  }

  ngOnInit() {
    //to disable the location input
    this.form = this.fb.group({
      entryType: []
    });

    // this.stdService.findAll().subscribe(data => {
    //   this.stddata = data;
  }

  notClass:boolean;

  onChange(selectedVal: MatRadioChange) {
    this.notClass=selectedVal.value;
    if (this.notClass) {
      this.stdUnavailability.location=null;
      this.stdUnavailability.course_id=null;
    } 
  }

//   onClick(event) {
//     event.preventDefault();
//  //  console.log('onClick event.checked ' + event.checked);
//   // console.log('onClick event.target.checked '+event.target.checked);
//     console.log('onClick this.ref._checked '+ this.ref._checked);

//     this.ref._checked = !this.ref._checked;
//   }

  onSubmit() {
    this.weekDays.forEach(element => {
      if (element.checked){
        this.stdUnavailability.day.push(element.name);
      }
    });
    this.stdService
      .save(this.stdUnavailability)
      .subscribe(result => this.gotoSchedulePage());
    console.log(this.stdUnavailability);
  }

  gotoSchedulePage(){
    this.router.navigate(['/stdSchedule']);
    this.cancel();
  }
}

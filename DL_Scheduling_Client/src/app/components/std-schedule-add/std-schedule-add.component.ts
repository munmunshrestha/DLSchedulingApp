import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  MatDialogRef,
  MatRadioChange,
  MatCheckboxChange
} from "@angular/material";
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
  stdUnavailability: stdUnavailability;

  constructor(
    private fb: FormBuilder,
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

  notClass: boolean;

  onChange(selectedVal: MatRadioChange) {
    this.notClass = selectedVal.value;
    if (this.notClass) {
      this.stdUnavailability.location = null;
      this.stdUnavailability.course_id = null;
    }
  }

  //   onClick(event) {
  //     event.preventDefault();
  //  //  console.log('onClick event.checked ' + event.checked);
  //   // console.log('onClick event.target.checked '+event.target.checked);
  //     console.log('onClick this.ref._checked '+ this.ref._checked);

  //     this.ref._checked = !this.ref._checked;
  //   }

  /////old
  // onSubmit() {

  // this.stdService
  //   .save(this.stdUnavailability)
  //   .subscribe(result => this.gotoSchedulePage());
  // console.log(this.stdUnavailability);
  // }

  startTimeDB: String;
  endTimeDB: String;

  ////new
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
            
        )
      );

    this.stdUnavailability.start = this.startTimeDB;
    this.stdUnavailability.end = this.endTimeDB;
    this.stdUnavailability.is_dl=0;
    this.weekDays.forEach(element => {
      if (element.checked) {
        this.stdUnavailability.day.push(element.name);
      }
    });


    //change to json type
    console.log(this.stdUnavailability);
    
    // let std=JSON.stringify(this.stdUnavailability) ;

    let start=this.stdUnavailability.start;
    let end=this.stdUnavailability.end;
    let is_class:number;
    let course_id=this.stdUnavailability.course_id;
    let day=this.stdUnavailability.day;
    let location=this.stdUnavailability.location;
    let isDL=this.stdUnavailability.is_dl;

    //mysql can store 0 or 1 (Tinyint(1))
    if (this.stdUnavailability.std_not_class){
      is_class=0;
    }
    else{
      is_class=1;
    }
    console.log(start, end,day,is_class,course_id, location);
    this.stdService.sendData(start, end,day,is_class,course_id, location,isDL ).subscribe(data => {
      // console.log(data);
      if (data.success) {
        this.cancel();
        this.router.navigate(['student/stdSchedule']);
      } else {
        window.alert(data.message);
      }
    });
   // this.stdService.getData().subscribe(data=>{console.log(data);})


  //  this.stdUnavailability = new stdUnavailability();
  //  this.resetStartTime();
  //  this.resetEndTime();
  //  this.resetWeekDays();
  }
}

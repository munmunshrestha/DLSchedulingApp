import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from '@angular/forms';
import { StdUnavailabilityService } from '../../services/std-unavailability.service';
import {stdUnavailability} from '../../models/std-unavailability';



@Component({
  selector: "app-std-schedule-add",
  templateUrl: "./std-schedule-add.component.html",
  styleUrls: ["./std-schedule-add.component.scss"]
})
export class StdScheduleAddComponent implements OnInit{
  //for AM/PM of timepicker
  meridian = true;
  // stdUnavailability: stdUnavailability;
  //dialog from Add Schedule button in MySchedule page
  form: FormGroup;

    stddata: any=[];

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router, 
    private stdService: StdUnavailabilityService,
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

  // console.log(this.stddata);
    this.stdService.findAll().subscribe(data => {
            this.stddata = data;
            // console.log(data);
              console.log(this.stddata);

        });
        
  }

  // onSubmit() {
  //   this.stdService.save(this.stdUnavailability);
  //   console.log(this.stdUnavailability);
  // }

  
}

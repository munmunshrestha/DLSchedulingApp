import { Component, OnInit } from '@angular/core';
import { StdUnavailabilityService } from 'src/app/services/std-unavailability.service';

@Component({
  selector: 'app-std-request-leave',
  templateUrl: './std-request-leave.component.html',
  styleUrls: ['./std-request-leave.component.scss']
})
export class StdRequestLeaveComponent implements OnInit {

  constructor(
    private stdService: StdUnavailabilityService,

  ) { }
  weekdays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  ngOnInit() {
  }
  selectedDay:string;
  ListAssignedClasses(){
    this.stdService.getAssignedClass(this.selectedDay).subscribe(data => {
      console.log(data);
    });
  }

}

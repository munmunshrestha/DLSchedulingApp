import { Component, OnInit } from "@angular/core";
import { LeaveRequestService } from "src/app/services/leave-request.service";
import { LeaveRequest } from "src/app/models/leave-request";

@Component({
  selector: "app-leave-request-action",
  templateUrl: "./leave-request-action.component.html",
  styleUrls: ["./leave-request-action.component.scss"]
})
export class LeaveRequestActionComponent implements OnInit {
  constructor(private leaveService: LeaveRequestService) {}
  requests: LeaveRequest[];
  requestExist:boolean=false;
  ngOnInit() {
    this.leaveService.getRequests().subscribe(data => {
      this.requests = data;
      if(this.requests.length!=0){
        this.requestExist=true;
      }
      else{
        this.requestExist=false;
      }
      console.log(data);
    });
  }

  accept(id) {
    this.leaveService.acceptRequest(id).subscribe(data=>{
      if (data.success) {
        this.ngOnInit();
      } else {
        window.alert(data.message);
      }
    })
    console.log(id);
  }

  reject(id) {
    this.leaveService.rejectRequest(id).subscribe(data=>{
      if (data.success) {
        this.ngOnInit();
      } else {
        window.alert(data.message);
      }
    })
    console.log(id);
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../models/leave-request';

@Injectable({
  providedIn: 'root'
})

export class LeaveRequestService {

  private leaveReqUrl:string;

  constructor(private http: HttpClient) {
    this.leaveReqUrl = 'http://localhost:8080/leaveRequest/';
  }
 
  public findAll(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.leaveReqUrl.concat('all'));
  }
 
  public save(LeaveRequest: LeaveRequest) {
    return this.http.post<LeaveRequest>(this.leaveReqUrl.concat('add'), LeaveRequest);
  }
}

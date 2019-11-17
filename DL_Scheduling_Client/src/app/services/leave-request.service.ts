import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LeaveRequest } from "../models/leave-request";

interface myData {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: "root"
})
export class LeaveRequestService {
  private leaveReqUrl: string;

  constructor(private http: HttpClient) {}

  public acceptRequest(id) {
    return this.http.post<myData>("/api/leave-request-accept.php", {
      id
    });
  }

  public rejectRequest(id) {
    return this.http.post<myData>("/api/leave-request-reject.php", {
      id
    });
  }

  public getRequests(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>("/api/leave-request-read.php");
  }

  public save(date, dlClass) {
    return this.http.post<myData>("/api/leave-request-add.php", {
      date,
      dlClass
    });
  }
}

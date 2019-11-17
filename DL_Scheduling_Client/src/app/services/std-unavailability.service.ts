import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { stdUnavailability } from "../models/std-unavailability";
import { Observable } from "rxjs/observable";
import { calendarEvent } from "./../models/calendarEvent";
import { dlClassInfo } from "../models/dl-class-info";

interface myData {
  success: boolean;
  message: string;
}

interface dayTimeData {
  Monday: any[];
}

@Injectable({
  providedIn: "root"
})
export class StdUnavailabilityService {
  constructor(private http: HttpClient) {}

  // public findAll(): Observable<stdUnavailability[]> {
  //   return this.http.get<stdUnavailability[]>(this.stdUrl.concat("all"));
  // }

  // public save(stdUnavailability: stdUnavailability) {
  //   return this.http.post<stdUnavailability>(
  //     this.stdUrl.concat("add"),
  //     stdUnavailability
  //   );
  // }

  sendData(start, end, day, is_class, course_id, location, isDL) {
    // let stdData=JSON.stringify(std) **assyncronous function below so cannot do this

    return this.http.post<myData>("/api/std-schedule-create.php", {
      start,
      end,
      day,
      is_class,
      course_id,
      location,
      isDL
    });
  }

  getData() {
    return this.http.get<dayTimeData>("/api/std-schedule-read.php");
  }

  getAssignedClass(day) {
    return this.http.get<dlClassInfo[]>("/api/std-getAssignedDl.php", {
      params: { dayVal: day }
    });
  }
}

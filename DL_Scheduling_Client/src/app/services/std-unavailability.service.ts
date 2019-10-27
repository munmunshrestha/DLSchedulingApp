import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { stdUnavailability } from "../models/std-unavailability";
import { Observable } from "rxjs/observable";

interface myData {
  success: boolean;
  message: string;
}

interface event {
  title: string;
  start: string;
  end: string;
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

  sendData(start, end, day, is_class, course_id, location) {
    // let stdData=JSON.stringify(std) **assyncronous function below so cannot do this

    return this.http.post<myData>("/api/std-schedule.php", {
      start,
      end,
      day,
      is_class,
      course_id,
      location
    });
  }

  getData() {
    return this.http.get<event[]>("/api/std-schedule-read.php");
  }
}

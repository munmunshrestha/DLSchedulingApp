import { Injectable } from '@angular/core';
import {calendarEvent} from "./../models/calendarEvent";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { dlClassInfo } from '../models/dl-class-info';


interface myData {
  success: boolean;
  message: string;
} 


@Injectable({
  providedIn: 'root'
})
export class DlScheduleService {

  constructor(private http: HttpClient) { }

  sendData(start, end, day, course_id, location) {
    // let stdData=JSON.stringify(std) **assyncronous function below so cannot do this

    return this.http.post<myData>("/api/dl-schedule-create.php", {
      start,
      end,
      day,
      course_id,
      location
    });
  }

  getData() {
    return this.http.get<calendarEvent[]>("/api/dl-schedule-read.php");
  }

  getDataToAssign() {
    return this.http.get<dlClassInfo[]>("/api/assign-dl-class-read.php"
    // ,{
      // day
    // }
    );
  }

  getDataForDay(day){
    return this.http.get<dlClassInfo[]>("/api/assign-dl-class-read.php", {params: {dayVal: day}});
  }
}

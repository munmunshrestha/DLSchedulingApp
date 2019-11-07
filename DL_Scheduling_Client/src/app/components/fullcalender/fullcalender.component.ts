import { Component, OnInit } from '@angular/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import {StdUnavailabilityService} from '../../services/std-unavailability.service';
import {calendarEvent} from '../../models/calendarEvent';

@Component({
  selector: 'app-fullcalender',
  templateUrl: './fullcalender.component.html',
  styleUrls: ['./fullcalender.component.scss']
})
export class FullcalenderComponent implements OnInit {
  // events: calenderEvent[];
  constructor(private stdService: StdUnavailabilityService) {}

  eventSources:calendarEvent[];

  ngOnInit() {
    // this.stdService.getData().subscribe((events:calendarEvent[])=> {
    // this.eventSources=events;
    // console.log(events)});

  }


    //fullcalender timeline
  calendarPlugins = [timeGridPlugin];


  // eventSources= 
  // [
  
  //       // put the array in the `events` property
       
  //       {
  //         title: "Lunch",
  //         start: "2019-10-21 10:00:00",
  //         end: "2019-10-21 12:00:00"
  //       },
  //       {
  //         title: "Lunch2",
  //         start: "2019-10-22 10:00:00",
  //         end: "2019-10-22 12:00:00"
  //       }
    
  // ];

}

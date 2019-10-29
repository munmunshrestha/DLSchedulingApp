import { Component, OnInit } from '@angular/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';


@Component({
  selector: 'app-dl-assign-class',
  templateUrl: './dl-assign-class.component.html',
  styleUrls: ['./dl-assign-class.component.scss']
})
export class DlAssignClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  liscense="GPL-My-Project-Is-Open-Source";
  calendarPlugins=[ resourceTimelinePlugin, interactionPlugin ];
  view="resourceTimelineDay";
  resourceText= "Student Workers";
  aspectRatio= 1.5;

  resources= [
    { id: 'a', title: 'Auditorium A' },
    { id: 'b', title: 'Auditorium B', eventColor: 'green' },
    { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
    { id: 'd', title: 'Auditorium D', children: [
        { id: 'd1', title: 'Room D1' },
        { id: 'd2', title: 'Room D2' }
    ] },
    { id: 'e', title: 'Auditorium E' },
    { id: 'f', title: 'Auditorium F', eventColor: 'red' },
    { id: 'g', title: 'Auditorium G' },
    { id: 'h', title: 'Auditorium H' },
    { id: 'i', title: 'Auditorium I' },
    { id: 'j', title: 'Auditorium J' },
    { id: 'k', title: 'Auditorium K' },
    { id: 'l', title: 'Auditorium L' },
    { id: 'm', title: 'Auditorium M' },
    { id: 'n', title: 'Auditorium N' },
    { id: 'o', title: 'Auditorium O' },
    { id: 'p', title: 'Auditorium P' },
    { id: 'q', title: 'Auditorium Q' },
    { id: 'r', title: 'Auditorium R' },
    { id: 's', title: 'Auditorium S' },
    { id: 't', title: 'Auditorium T' },
    { id: 'u', title: 'Auditorium U' },
    { id: 'v', title: 'Auditorium V' },
    { id: 'w', title: 'Auditorium W' },
    { id: 'x', title: 'Auditorium X' },
    { id: 'y', title: 'Auditorium Y' },
    { id: 'z', title: 'Auditorium Z' }
];
events= [
    { id: '1', resourceId: 'b', start: '2019-10-28T15:00:00', end: '2019-10-28T16:00:00', title: 'event 1' },
    { id: '2', resourceId: 'c', start: '2019-10-28T21:00:00', end: '2019-10-28T22:00:00', title: 'event 2' },
    { id: '3', resourceId: 'd', start: '2019-10-28', end: '2019-10-28', title: 'event 3' },
    { id: '4', resourceId: 'e', start: '2019-10-28T03:00:00', end: '2019-10-28T08:00:00', title: 'event 4' },
    { id: '5', resourceId: 'f', start: '2019-10-28T11:30:00', end: '2019-10-28T12:30:00', title: 'event 5' }
];
}

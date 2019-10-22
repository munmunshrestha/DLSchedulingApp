import { Component} from '@angular/core';
import timeGridPlugin from '@fullcalendar/timegrid';

 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
 
export class AppComponent {
    //fullcalender timeline
  calendarPlugins = [timeGridPlugin];

  eventSources:any=[
    {
      events: [ // put the array in the `events` property
        {
        title: 'Meeting',
        start: '2019-10-15T10:30:00'
      },
      {
        title: 'Lunch',
        start: '2019-10-21T10:30:00',
        end: '2019-10-21T12:30:00'      
      }
    ]
    }
]
}
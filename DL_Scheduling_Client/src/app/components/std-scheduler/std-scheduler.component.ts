import { Component, ViewChild, AfterViewInit,OnInit  } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { StdUnavailabilityService } from '../../services/std-unavailability.service';
import {stdUnavailability} from '../../models/std-unavailability';

@Component({
  selector: 'app-std-scheduler',
  templateUrl: './std-scheduler.component.html',
  // styleUrls: ['./std-scheduler.component.scss']
})
export class StdSchedulerComponent implements OnInit {

ngOnInit() {
    
        this.stdService.findAll().subscribe(data => {
            this.getdata(data);
            
        });
        console.log(this.stddata);
}
constructor(private stdService: StdUnavailabilityService){}
  @ViewChild('schedulerReference', {static: false}) scheduler: jqxSchedulerComponent;
    // ngAfterViewInit(): void {
    //     this.scheduler.ensureAppointmentVisible('id1');
    // }
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
    // that=this;
public stddata: any=[];

    getdata(val){
        this.stddata.push(val);
        console.log(this.stddata);

    }

    // generateAppointments(): any {
    //     let appointments = new Array();
        
    //     let appointment6 = {
    //         id: "id6",
    //         description: "",
    //         location: "",
    //         subject: "Interview with Nancy",
    //         calendar: "Room 4",
    //         start: new Date(2018, 10, 26, 14, 0, 0),
    //         end: new Date(2018, 10, 26, 16, 0, 0)
    //     };
        
    //     appointments.push(appointment6);
    //     return appointments;
    // };
    

    source: any =
    {
        dataType: "json",
        dataFields: [
            { name: 'id', type: 'string' },
            // { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            // { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date', format: 'HH:mm' },
            { name: 'end', type: 'date', format: 'HH:mm' }
        ],
        id: 'id',
        localData: this.stddata
        // url: 'localhost:8080/stdUnavailability/all'
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    date: any = new jqx.date(2018, 11, 23);
    appointmentDataFields: any =
    {
        from: "start",
        to: "end",
        id: "id",
        // description: "description",
        location: "location",
        subject: "subject",
        // resourceId: "calendar"
    };
    // resources: any =
    // {
    //     colorScheme: "scheme05",
    //     dataField: "calendar",
    //     source: new jqx.dataAdapter(this.source)
    // };
    views: any[] =
    [
        { type: 'weekView', showWeekends: false}
        // 'dayView',
        // 'weekView',
        // 'monthView'
    ];  
}
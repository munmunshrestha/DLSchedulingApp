import { Component, OnInit } from '@angular/core';
import {DLscheduleComponent} from '../dlschedule/dlschedule.component';

@Component({
  selector: 'app-dl-by-location',
  templateUrl: './dl-by-location.component.html',
  styleUrls: ['./dl-by-location.component.scss']
})
export class DlByLocationComponent implements OnInit {

  constructor(private parent:DLscheduleComponent) { }

  ngOnInit() {
    console.log(this.parent.getDay());
  }

}

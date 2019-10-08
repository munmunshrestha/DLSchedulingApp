import { Component, OnInit } from '@angular/core';
import {DlClassAddComponent} from '../dl-class-add/dl-class-add.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dlschedule',
  templateUrl: './dlschedule.component.html',
  styleUrls: ['./dlschedule.component.scss']
})
export class DLscheduleComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DlClassAddComponent, {
      width: "600px"
    });
  }

  ngOnInit() {
  }

}

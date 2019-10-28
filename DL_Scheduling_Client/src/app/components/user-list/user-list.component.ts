import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import {UserFormComponent} from '../user-form/user-form.component'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 
  users: User[];
 
  constructor(private userService: UserService, public dialog: MatDialog) {
  }
 

  ngOnInit() {
  //   this.userService.findAll().subscribe(data => {
  //     this.users = data;
  //   });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: "600px"
    });
  }
}


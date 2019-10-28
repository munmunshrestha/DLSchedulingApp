import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { MatDialog } from "@angular/material/dialog";
import {StdWorkersAddComponent} from '../std-workers-add/std-workers-add.component';

@Component({
  selector: "app-std-workers",
  templateUrl: "./std-workers.component.html",
  styleUrls: ["./std-workers.component.scss"]
})
export class StdWorkersComponent implements OnInit {
 
  constructor(private userService: UserService, public dialog: MatDialog) {
  }
  users: User[];


  ngOnInit() {
    this.userService.getData().subscribe(data=> {
      this.users=data;
    });
  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StdWorkersAddComponent, {
      width: "600px"
    });
  }
}

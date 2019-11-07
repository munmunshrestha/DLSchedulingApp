import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

interface loggedInUser {
  id: number;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
  constructor(private userService: UserService) { }
  username:String;
  user:loggedInUser;
  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(user => {
      this.username=user.name;
    });
  }

}

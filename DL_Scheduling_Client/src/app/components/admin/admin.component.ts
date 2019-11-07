import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../services/user.service";

interface loggedInUser {
  id: number;
  name: string;
}
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  constructor(private userService: UserService) {}
  
  username: String;
  user: loggedInUser;
  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(user => {
      this.username = user.name;
    });
  }
}

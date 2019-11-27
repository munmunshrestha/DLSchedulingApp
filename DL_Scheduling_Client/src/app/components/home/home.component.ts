// import { Component, OnInit } from '@angular/core';
// import {HttpService} from '../../services/http.service';
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
// //   user:  user[];
// //   selectedUser:  user  = { id :  null , name:null, password:  null};

//   constructor(private http: HttpService) { }

//   ngOnInit() {
//     // this.http.readUser().subscribe((user: user[])=>{
//     //   this.user = user;
//     //   console.log(this.user);
//     // })
//   }
// }

import { Component } from "@angular/core";
import { first } from "rxjs/operators";

// import {  AuthenticationService } from './../../services/authentication.service';
import { UserService } from "./../../services/user.service";
import { Router } from "@angular/router";

interface loggedInUser {
  id: number;
  name: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  // loading = false;
  // currentUser: Users;
  // userFromApi: Users;
  username: String;
  user: loggedInUser;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(user => {
      this.username = user.name;
    });
  }

  titleClick() {
    console.log("clicked");
    this.router.navigate(["student/home"]);
  }
}

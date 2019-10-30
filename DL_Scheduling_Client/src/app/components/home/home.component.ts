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


import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

// import {  AuthenticationService } from './../../services/authentication.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  // loading = false;
  // currentUser: Users;
  // userFromApi: Users;

  // constructor(
  //     private userService: UserService,
  //     privat e authenticationService: AuthenticationService
  // ) {
  //     this.currentUser = this.authenticationService.currentUserValue;
  // }

  ngOnInit() {
    // this.loading = true;
    // this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
    //     this.loading = false;
    //     this.userFromApi = user;
    // });
  }
}
//
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  // loading = false;
  // submitted = false;
  // returnUrl: string;
  // error = '';
  email: string;
  password: string;

  constructor(
    private Auth: AuthService,
    private router: Router //     private formBuilder: FormBuilder, //     private route: ActivatedRoute,
  ) //     private router: Router,
  //     private authenticationService: AuthenticationService
  {
    //     // redirect to home if already logged in
    //     if (this.authenticationService.currentUserValue) {
    //         this.router.navigate(['/']);
    //     }
  }

  ngOnInit() {
    //     this.loginForm = this.formBuilder.group({
    //         username: ['', Validators.required],
    //         password: ['', Validators.required]
    //     });
    //     // get return url from route parameters or default to '/'
    //     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

  // onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.loginForm.invalid) {
  //         return;
  //     }

  //     this.loading = true;
  //     this.authenticationService.login(this.f.username.value, this.f.password.value)
  //         .pipe(first())
  //         .subscribe(
  //             data => {
  //                 this.router.navigate([this.returnUrl]);
  //             },
  //             error => {
  //                 this.error = error;
  //                 this.loading = false;
  //             });
  // }

  

  loginUser(event) {
    event.preventDefault();

    console.log(this.email, this.password);
    let email = this.email;
    let password = this.password;
    if (email == null || password == null) {
      window.alert("Please enter your email and password");
    } else {
      this.Auth.getUserDetails(email, password).subscribe(data => {
        console.log(data);
        if (data.success) {
          this.Auth.setLoggedIn(true);
          if (data.message == "Admin") {
            //redirect the person to admin
            this.router.navigate(["admin"]);
            console.log(data.message);
          } else {
            this.router.navigate(["student"]);
            console.log(data.message);
          }
        } else {
          window.alert(data.message);
        }
      });
    }
  }
}

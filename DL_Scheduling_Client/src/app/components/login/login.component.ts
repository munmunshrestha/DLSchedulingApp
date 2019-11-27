//
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { first } from "rxjs/operators";

import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.scss"]

})
export class LoginComponent implements OnInit {
  // email: string;
  // password: string;
  hide = true;

  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);

  getErrorMessageEmail() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }

  getErrorMessagePassword() {
    return this.email.hasError("required") ? "You must enter a value" : "";
  }

  constructor(private Auth: AuthService, private router: Router) {}

  ngOnInit() {}
  alertMsg:string;
  showAlert:boolean;

  loginUser(event) {
    console.log(this.email.valid);
    if (this.email.valid && this.password.valid) {
      event.preventDefault();
      let inputEmail = this.email.value;
      let inputPassword = this.password.value;

      this.Auth.getUserDetails(inputEmail, inputPassword).subscribe(data => {
        console.log(data);
        if (data.success) {
          this.Auth.setLoggedIn(true);
          if (data.message == "Admin") {
            //redirect the person to admin
            this.router.navigate(["admin/home"]);
          } else {
            this.router.navigate(["student/home"]);
          }
        } else {
          this.alertMsg=data.message;
          this.showAlert=true;
        }
      });
    }
  }
}

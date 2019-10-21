import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
  }

  // form: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  onSubmit() {
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    // }
    this.router.navigate(['/home']);
  }
  // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();

  // loginUser(event) {
  //   event.preventDefault()
  //   const target = event.target
  //   const username = target.querySelector('#username').value
  //   const password = target.querySelector('#password').value

  //   this.Auth.getUserDetails(username, password).subscribe(data => {
  //     if(data.success) {
  //       this.router.navigate(['admin'])
  //       this.Auth.setLoggedIn(true)
  //     } else {
  //       window.alert(data.message)
  //     }
  //   })
  //   console.log(username, password)
  // }
}

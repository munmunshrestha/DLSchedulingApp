import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService, private auth: AuthService, private router:Router) { }

  ngOnInit() {
    this.user.logout().subscribe(data =>{
      if (data.success){
        this.router.navigate(['login'])
        this.auth.setLoggedIn(false)
      }else{
        window.alert('some problem')
      }
    })
  }

}

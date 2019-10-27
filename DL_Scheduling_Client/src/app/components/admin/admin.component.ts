import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  message="loading.."
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getSomeData().subscribe(data=>{
      this.message=data.message
    })

  }

}

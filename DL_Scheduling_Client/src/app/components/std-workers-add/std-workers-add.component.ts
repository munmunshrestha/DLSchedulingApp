import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from '@angular/router';
import { Inject } from '@angular/core';

import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import {MailService} from "@sendgrid/mail";

@Component({
  selector: 'app-std-workers-add',
  templateUrl: './std-workers-add.component.html',
  styleUrls: ['./std-workers-add.component.scss']
})
export class StdWorkersAddComponent {

  user: User;

  
  constructor(private dialogRef: MatDialogRef<StdWorkersAddComponent>,
    private router: Router, 
    private userService: UserService,
    
    ) {
      this.user= new User();

     }

    public cancel() {
      this.dialogRef.close();
    }

    onSubmit() {

    let id=this.user.id;
    let email=this.user.email;
    let fname=this.user.fname;
    let lname=this.user.lname;
    let password=this.user.password;



      this.userService.sendData(id,email ,fname ,lname ,password , 0 ).subscribe(data => {
        if (data.success) {
          //redirect the person to admin
          this.cancel();
          window.alert(data.message);

        } else {
          window.alert(data.message);
        }
      });
      console.log(this.user);
    }

    gotoUserList() {
      this.router.navigate(['/users']);
      this.cancel();
  
    }



    
}

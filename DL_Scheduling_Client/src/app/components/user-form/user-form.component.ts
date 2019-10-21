import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
 
  user: User;
 
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private dialogRef: MatDialogRef<UserFormComponent>
    ) {
    this.user = new User();
  }
  public cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/users']);
    this.cancel();

  }
}
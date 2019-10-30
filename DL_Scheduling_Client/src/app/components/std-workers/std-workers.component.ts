import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { MatDialog, MatDialogRef, MatDialogConfig } from "@angular/material/dialog";
import { StdWorkersAddComponent } from "../std-workers-add/std-workers-add.component";

@Component({
  selector: "app-std-workers",
  templateUrl: "./std-workers.component.html",
  styleUrls: ["./std-workers.component.scss"]
})
export class StdWorkersComponent implements OnInit {
  constructor(private userService: UserService, public dialog: MatDialog) {}
  users: User[];
  private dialogRef: MatDialogRef<StdWorkersAddComponent>;

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      this.users = data;
    });
  }
  
  onDelete(id){
    console.log(id);
    this.userService.deleteData(id).subscribe(data =>{
      console.log("deleted");
      this.ngOnInit();

    })
  }

  onEdit(id){
    console.log(id);
    this.userService.editData(id).subscribe(data =>{
      console.log("edited");
      this.ngOnInit();

    })
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(StdWorkersAddComponent, {
      width: "600px"
    });
    this.dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  openDialogEdit(user): void {
    //**open dialogbox with pre filled data */
    // console.log(user);
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.data =user;
    // dialogConfig.width= "600px",

    // this.dialogRef = this.dialog.open(StdWorkersAddComponent, dialogConfig );
    // this.dialogRef.afterClosed().subscribe(() => {
    //   this.ngOnInit();
    // });
  }
}

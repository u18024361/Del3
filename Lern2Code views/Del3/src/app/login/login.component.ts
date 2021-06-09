import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{ForgotpasswordComponent} from './forgotpassword/forgotpassword.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  constructor(route:Router,public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotpasswordComponent, {
      width: '350px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  ngOnInit(): void {
  }

}

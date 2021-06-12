import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { CreatemessageComponent } from '../createmessage/createmessage.component';
import { MessagingComponent } from '../messaging.component';

@Component({
  selector: 'app-meassagestudent',
  templateUrl: './meassagestudent.component.html',
  styleUrls: ['./meassagestudent.component.scss']
})
export class MeassagestudentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MessagingComponent , {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'success',
        title: 'message sent',
        
        confirmButtonText: 'Ok',
        
      })
      
    });
  }

}

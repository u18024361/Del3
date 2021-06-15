import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { SendmessageComponent } from '../sendmessage/sendmessage.component';

@Component({
  selector: 'app-messagehome',
  templateUrl: './messagehome.component.html',
  styleUrls: ['./messagehome.component.scss']
})
export class MessagehomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete the message',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Message Deleted',
          'success'
        )
      }
    })
  }

  search(){
    Swal.fire({
      
      icon: 'warning',
      title: 'No matches Found',
      confirmButtonText: 'Ok',
      
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SendmessageComponent, {
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



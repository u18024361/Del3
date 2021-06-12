import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { CreatemessageComponent } from './createmessage/createmessage.component';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
  styles: [`
  :host nb-tab {
    padding: 1.25rem;
  }
`],
})
export class MessagingComponent implements OnInit {

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
          'Message cannot be deleted until 24 hours have passed since it was sent',
          'error'
        )
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatemessageComponent, {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'warning',
        title: 'No matches found',
        
        confirmButtonText: 'Ok',
        
      })
      
    });
  }

}

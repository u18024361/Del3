import { Component, OnInit } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { CreatesessionComponent } from './createsession/createsession.component';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete the session',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Successfully deleted session',
          'success'
        )
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatesessionComponent, {
      width: '850px',
      height:'420px'
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'error',
        title: 'Session already exists. Please try again',
        
        confirmButtonText: 'Ok',
        
      })
      
    });
  }

}

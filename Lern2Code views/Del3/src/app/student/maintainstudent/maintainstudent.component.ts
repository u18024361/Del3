import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-maintainstudent',
  templateUrl: './maintainstudent.component.html',
  styleUrls: ['./maintainstudent.component.scss']
})
export class MaintainstudentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent , {
      width: '750px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'error',
        title: 'Unable to edit profile',
        
        confirmButtonText: 'Ok',
        
      })
      
    });
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete your profile',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Profile deleted successfully',
          'success'
        )
      }
    })
  }
  
  

}





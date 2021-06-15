import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { AddfeedbackComponent } from '../addfeedback/addfeedback.component';

@Component({
  selector: 'app-feddbackhome',
  templateUrl: './feddbackhome.component.html',
  styleUrls: ['./feddbackhome.component.scss']
})
export class FeddbackhomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete the feedback',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Feedback Deleted',
          '',
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
    const dialogRef = this.dialog.open(AddfeedbackComponent, {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'error',
        title: 'Feedback already exists for this session',
        
        confirmButtonText: 'Okay',
        
      })
      
    });
  }

}

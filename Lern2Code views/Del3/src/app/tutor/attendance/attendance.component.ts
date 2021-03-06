import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { AddattendanceComponent } from '../addattendance/addattendance.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete the attendance?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Successfully deleted attendance',
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

  nottaken(){
    Swal.fire({
      icon: 'error',
      title: 'The attendance for this session has not been taken yet ',
      confirmButtonText: 'Okay',
      
    })
  }

  confirmed(){
    Swal.fire({
      title: 'Are you sure you want to submit the attendance?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Successfully submitted attendance',
          'success'
        )
      }
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddattendanceComponent, {
      width: '900px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'success',
        title: 'Attendance has been created',
        confirmButtonText: 'Ok',
        
      })
      
    });
  }


  
}

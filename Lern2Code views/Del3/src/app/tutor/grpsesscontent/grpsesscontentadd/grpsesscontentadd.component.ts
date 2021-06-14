import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { AddgrpcontentComponent } from '../addgrpcontent/addgrpcontent.component';

@Component({
  selector: 'app-grpsesscontentadd',
  templateUrl: './grpsesscontentadd.component.html',
  styleUrls: ['./grpsesscontentadd.component.scss']
})
export class GrpsesscontentaddComponent implements OnInit {

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
    const dialogRef = this.dialog.open(AddgrpcontentComponent, {
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

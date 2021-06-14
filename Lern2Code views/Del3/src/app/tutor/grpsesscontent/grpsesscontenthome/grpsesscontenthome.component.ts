import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { GrpsesscontentaddComponent } from '../grpsesscontentadd/grpsesscontentadd.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grpsesscontenthome',
  templateUrl: './grpsesscontenthome.component.html',
  styleUrls: ['./grpsesscontenthome.component.scss']
})
export class GrpsesscontenthomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  SesContent= function () {
    this.router.navigateByUrl('/addgrpsesscontent');
};


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
    const dialogRef = this.dialog.open(GrpsesscontentaddComponent, {
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

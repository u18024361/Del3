import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { AddContentComponent } from './add-content/add-content.component';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete the content',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Content successfully deleted',
          'success'
        )
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddContentComponent, {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'error',
        title: 'Course content file already exists. Please try again',
        
        confirmButtonText: 'Ok',
        
      })
      
    });
  }


}

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { AddcategoryComponent } from './addcategory/addcategory.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete the category',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success!',
          'Content category has been deleted.',
          'success'
        )
      }
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddcategoryComponent, {
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

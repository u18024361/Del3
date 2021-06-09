import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import{AddCategoryComponent} from './add-category/add-category.component'

@Component({
  selector: 'app-session-content',
  templateUrl: './session-content.component.html',
  styleUrls: ['./session-content.component.scss']
})
export class SessionContentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  search(){
    Swal.fire({
      
      icon: 'error',
      title: 'Session content category already exists. Please try again',
      confirmButtonText: 'Ok',
      
    })
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to update the content category',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success!',
          'Content category has been added.',
          'success'
        )
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'success',
        title: 'Category has been updated',
        confirmButtonText: 'Ok',
        
      })
      
    });
  }

}

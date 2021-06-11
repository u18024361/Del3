import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { AdddegreeComponent } from '../adddegree/adddegree.component';

@Component({
  selector: 'app-degreehome',
  templateUrl: './degreehome.component.html',
  styleUrls: ['./degreehome.component.scss']
})
export class DegreehomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Degree Exists',
      text: "Degree already exists. Please try again",
      icon: 'error',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Degree has been deleted.',
          'success'
        )
      }
    })
  }

  edit()
  {
    Swal.fire({
      title: 'Are you sure you want to delete the Degree?',
      
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saved!',
          'Degree has been updated.',
          'success'
        )
      }
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AdddegreeComponent, {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'success',
        title: 'Degree has been created',
        confirmButtonText: 'Ok',
        
      })
      
    });
  }
  
  search(){
    Swal.fire({
      
      icon: 'warning',
      title: 'No matches Found',
      confirmButtonText: 'Ok',
      
    })
  }

}

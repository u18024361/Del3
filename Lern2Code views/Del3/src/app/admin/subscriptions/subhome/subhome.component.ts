import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { AddsubComponent } from '../addsub/addsub.component';

@Component({
  selector: 'app-subhome',
  templateUrl: './subhome.component.html',
  styleUrls: ['./subhome.component.scss']
})
export class SubhomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Subscription Exists',
      text: "Subscription already exists. Please try again",
      icon: 'error',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Subscription has been deleted.',
          'success'
        )
      }
    })
  }

  edit()
  {
    Swal.fire({
      title: 'Are you sure you want to delete the Subscription?',
      
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saved!',
          'Subscription has been updated.',
          'success'
        )
      }
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddsubComponent, {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'success',
        title: 'Subscription has been created',
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

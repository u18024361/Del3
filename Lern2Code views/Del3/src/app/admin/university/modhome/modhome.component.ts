import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { AddmodComponent } from '../../module/addmod/addmod.component';

@Component({
  selector: 'app-modhome',
  templateUrl: './modhome.component.html',
  styleUrls: ['./modhome.component.scss']
})
export class ModhomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Module Exists',
      text: "Module already exists. Please try again",
      icon: 'error',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Module has been deleted.',
          'success'
        )
      }
    })
  }

  edit()
  {
    Swal.fire({
      title: 'Are you sure you want to delete the Module?',
      
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saved!',
          'Module has been created.',
          'success'
        )
      }
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddmodComponent, {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'success',
        title: 'Module has been updated',
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

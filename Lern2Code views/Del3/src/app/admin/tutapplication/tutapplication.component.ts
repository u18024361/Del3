import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { CreatetutorComponent } from './createtutor/createtutor.component';
import { AccepttutComponent } from './accepttut/accepttut.component';

@Component({
  selector: 'app-tutapplication',
  templateUrl: './tutapplication.component.html',
  styleUrls: ['./tutapplication.component.scss']
})
export class TutapplicationComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }


  delete(){
    Swal.fire({
      title: 'University Exists',
      text: "This university already exists please enter another university",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'University has been deleted.',
          'success'
        )
      }
    })
  }

  edit()
  {
    Swal.fire({
      title: 'Are you sure you want to edit the University?',
      text: "Please ensure the name is correct",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saved!',
          'University has been created.',
          'success'
        )
      }
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AccepttutComponent, {
      width: '350px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'success',
        title: 'Thank you',
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

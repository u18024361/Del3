import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';

@Component({
  selector: 'app-searchstudnet',
  templateUrl: './searchstudnet.component.html',
  styleUrls: ['./searchstudnet.component.scss']
})
export class SearchstudnetComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DisplaystudentComponent, {
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

  delete(){
    Swal.fire({
      title: 'Are you sure you want to send this message',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Unable to send message',
          'error'
        )
      }
    })
  }

}

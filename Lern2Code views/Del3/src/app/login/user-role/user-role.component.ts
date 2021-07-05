import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import{AdduserroleComponent} from './adduserrole/adduserrole.component'


@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
delete(){
  Swal.fire({
    title: 'Are you sure you want to delete the user role?',

    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '',
        'successfully created user role ',
        'success'
      )
    }
  })
}
openDialog(): void {

  const dialogRef = this.dialog.open(AdduserroleComponent, {
    width: '0px',
    height:'0px',

    position: {
      top: '0px',
      left: '0px'
    }
 
    
  });

  dialogRef.afterClosed().subscribe(result => {
    Swal.fire({
    
      icon: 'error',
      title: 'User Role already exists',
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

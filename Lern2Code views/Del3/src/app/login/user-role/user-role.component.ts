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
    title: 'Are you sure you want to update the user role?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'User role has been deleted.',
        'success'
      )
    }
  })
}
openDialog(): void {
  const dialogRef = this.dialog.open(AdduserroleComponent, {
    width: '350px',
    
  });

  dialogRef.afterClosed().subscribe(result => {
    Swal.fire({
    
      icon: 'success',
      title: 'User role has been updated',
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

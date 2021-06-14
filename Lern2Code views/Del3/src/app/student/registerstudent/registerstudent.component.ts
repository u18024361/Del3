import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.scss']
})
export class RegisterstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    Swal.fire({
      title: ' Are you sure you want to register',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
      
          icon: 'error',
          title: 'Unable to Register',
          
          confirmButtonText: 'Ok',
          
        })
      }
    })
  }

  click(){
    Swal.fire({
      
      icon: 'error',
      title: 'This username is already taken',
      
      confirmButtonText: 'Ok',
      
    })
  }

}

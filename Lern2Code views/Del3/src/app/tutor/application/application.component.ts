import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to apply',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
      
          icon: 'success',
          title: 'successfully sent application',
          
          confirmButtonText: 'Ok',
          
        })
      }
    })
  }

  click(){
    Swal.fire({
      
      icon: 'error',
      title: 'Application already exists. Please try again',
      
      confirmButtonText: 'Ok',
      
    })
  }


}

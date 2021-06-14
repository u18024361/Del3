import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.scss']
})
export class AddattendanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  confirmed(){
    Swal.fire({
      title: 'Are you sure you want to update the attendance?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Successfully updated attendance',
          'success'
        )
      }
    })
  }

}

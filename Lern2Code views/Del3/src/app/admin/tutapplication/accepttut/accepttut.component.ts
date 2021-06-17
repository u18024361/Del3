import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-accepttut',
  templateUrl: './accepttut.component.html',
  styleUrls: ['./accepttut.component.scss']
})
export class AccepttutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reject(){
    Swal.fire({
      title: 'Are you sure you want to reject the tutor?',
      text: "This will notify the tutor of your decision",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Tutor has been Rejected!',
          '',
          'success'
        )
      }
    })
  }

  accept()
  {
    Swal.fire({
      title: 'Are you sure you want to accept the tutor?',
      text: "The tutor will be added to the system",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Tutor has been accepted!',
          '',
          'success'
        )
      }
    })
  }

}

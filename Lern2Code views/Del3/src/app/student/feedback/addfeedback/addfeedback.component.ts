import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.scss']
})
export class AddfeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  confirmed(){
    Swal.fire({
      title: 'Are you sure you want to give the feedback?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Unable to create feedback',
          '',
          'error'
        )
      }
    })
  }


}

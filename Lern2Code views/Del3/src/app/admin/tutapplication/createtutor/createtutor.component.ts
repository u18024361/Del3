import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createtutor',
  templateUrl: './createtutor.component.html',
  styleUrls: ['./createtutor.component.scss']
})
export class CreatetutorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  confirm()
  {
    Swal.fire({
      title: 'Are you sure you want to create the tutor?',
      text: "",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Tutor has been created',
          '',
          'success'
        )
      }
    })
  }

}

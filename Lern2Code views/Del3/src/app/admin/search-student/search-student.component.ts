import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    Swal.fire({
      
      icon: 'error',
      title: 'Unable to delete student',
      confirmButtonText: 'Ok',
      
    })
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete the student information?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Student has been deleted.',
          'success'
        )
      }
    })
  }
}

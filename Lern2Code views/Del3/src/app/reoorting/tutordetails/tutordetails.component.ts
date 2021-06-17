import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tutordetails',
  templateUrl: './tutordetails.component.html',
  styleUrls: ['./tutordetails.component.scss']
})
export class TutordetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  x(){
    Swal.fire(
      '',
      'Successfully downloaded report',
      'success'
    )
  }

}

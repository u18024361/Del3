import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-totalstudents',
  templateUrl: './totalstudents.component.html',
  styleUrls: ['./totalstudents.component.scss']
})
export class TotalstudentsComponent implements OnInit {

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

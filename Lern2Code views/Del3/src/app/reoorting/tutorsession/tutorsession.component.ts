import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tutorsession',
  templateUrl: './tutorsession.component.html',
  styleUrls: ['./tutorsession.component.scss']
})
export class TutorsessionComponent implements OnInit {

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

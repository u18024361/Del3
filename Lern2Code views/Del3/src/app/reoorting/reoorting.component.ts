import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reoorting',
  templateUrl: './reoorting.component.html',
  styleUrls: ['./reoorting.component.scss']
})
export class ReoortingComponent implements OnInit {

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

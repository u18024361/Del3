import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedbackreport',
  templateUrl: './feedbackreport.component.html',
  styleUrls: ['./feedbackreport.component.scss']
})
export class FeedbackreportComponent implements OnInit {

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

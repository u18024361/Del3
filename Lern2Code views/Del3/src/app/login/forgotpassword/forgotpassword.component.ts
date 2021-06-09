import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close(){Swal.fire({
    
    icon: 'success',
    text:'An email has been sent to you in order to reset your password.',
    confirmButtonText: 'Ok',
    
  })}
}

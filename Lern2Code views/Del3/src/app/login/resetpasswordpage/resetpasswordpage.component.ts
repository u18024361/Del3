import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-resetpasswordpage',
  templateUrl: './resetpasswordpage.component.html',
  styleUrls: ['./resetpasswordpage.component.scss']
})
export class ResetpasswordpageComponent implements OnInit {
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

success(){
  Swal.fire({
    
    icon: 'success',
    title: 'Your Password has been updated',
    confirmButtonText: 'Login',
    
  })
}

}

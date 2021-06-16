import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to checkout?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'The product has been successfully removed from your cart',
          'success',
          
        )
      }
    })
  }

  D(){
    Swal.fire({
      
      icon: 'error',
      title: 'Unable to add product',
      
      
      confirmButtonText: 'Ok',
      
    });

  }

}

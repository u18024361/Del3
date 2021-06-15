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

  D(){
    Swal.fire({
      
      icon: 'warning',
      title: 'You have no items in your cart',
      
      confirmButtonText: 'Ok',
      
    })
  }

}

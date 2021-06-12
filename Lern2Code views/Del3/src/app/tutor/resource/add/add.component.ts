import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Notes'},
    {value: 'pizza-1', viewValue: 'Video'},
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

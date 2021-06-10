import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Notes'},
    {value: 'pizza-1', viewValue: 'Video'},
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

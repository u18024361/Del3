import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
  styles: [`
  :host nb-tab {
    padding: 1.25rem;
  }
`],
})
export class MessagingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

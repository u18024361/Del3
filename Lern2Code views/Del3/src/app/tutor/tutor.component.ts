import { Breakpoints,BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable,} from 'rxjs';
import { map,shareReplay } from 'rxjs/operators';

import { ChartType,ChartOptions } from 'chart.js';
import Swal from 'sweetalert2'



import * as Chart from 'chart.js';
import { title } from 'process';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss']
})
export class TutorComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver,) { }

  ngOnInit(): void {
  }

}

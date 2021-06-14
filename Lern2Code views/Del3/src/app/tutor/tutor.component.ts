import { Breakpoints,BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable,} from 'rxjs';
import { map,shareReplay } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

import { ChartType,ChartOptions } from 'chart.js';
import Swal from 'sweetalert2'



import * as Chart from 'chart.js';
import { title } from 'process';
import { MaintainComponent } from './maintain/maintain.component';

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

  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete your profile',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Profile deleted successfully',
          'success'
        )
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MaintainComponent, {
      width: '850px',
      height:'640px'
     
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'error',
        title: 'Unable to save changes',
        
        confirmButtonText: 'Ok',
        
      })
      
    });
  }

}

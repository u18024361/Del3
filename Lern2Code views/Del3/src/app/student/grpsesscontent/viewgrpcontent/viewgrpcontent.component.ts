import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { WatchvideoComponent } from '../watchvideo/watchvideo.component';


@Component({
  selector: 'app-viewgrpcontent',
  templateUrl: './viewgrpcontent.component.html',
  styleUrls: ['./viewgrpcontent.component.scss']
})
export class ViewgrpcontentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WatchvideoComponent, {
      width: '900px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'success',
        title: 'Video Watched!',
        text:'Hope you enjoyed it',
        
        confirmButtonText: 'Okay',
        
      })
      
    });
  }

}

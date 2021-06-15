import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import {
  endOfDay,
  addMonths
} from 'date-fns';

import {
  DAYS_IN_WEEK,
  SchedulerViewDay,
  SchedulerViewHour,
  SchedulerViewHourSegment,
  CalendarSchedulerEvent,
  CalendarSchedulerEventAction,
  startOfPeriod,
  endOfPeriod,
  addPeriod,
  subPeriod,
  SchedulerDateFormatter,
  SchedulerEventTimesChangedEvent,
  CalendarSchedulerViewComponent
} from 'angular-calendar-scheduler';
import {
  CalendarView,
  CalendarDateFormatter,
  DateAdapter
} from 'angular-calendar';
import { Subject } from 'rxjs';
import { AppServiceService } from '../../tutor/sessions/app-service.service';
import { DisplaysessionComponent } from './displaysession/displaysession.component';

@Component({
  selector: 'app-groupsession',
  templateUrl: './groupsession.component.html',
  styleUrls: ['./groupsession.component.scss'],
  providers: [{
    provide: CalendarDateFormatter,
    useClass: SchedulerDateFormatter
}]
})
export class GroupsessionComponent implements OnInit {

  title: string = 'Angular Calendar Scheduler Demo';

  CalendarView = CalendarView;

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  viewDays: number = 7;
  refresh: Subject<any> = new Subject();
  locale: string = 'en';
  hourSegments: number = 1;
  weekStartsOn: number = 1;
  startsWithToday: boolean = false;
  activeDayIsOpen: boolean = true;
  excludeDays: number[] = []; // [0];
  dayStartHour: number = 8;
  dayEndHour: number = 20;

  minDate: Date = new Date();
  maxDate: Date = endOfDay(addMonths(new Date(), 1));
  dayModifier: Function;
  hourModifier: Function;
  segmentModifier: Function;
  eventModifier: Function;
  prevBtnDisabled: boolean = false;
  nextBtnDisabled: boolean = false;
  actions: CalendarSchedulerEventAction[] = [
    {
        when: 'enabled',
        label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">cancel</i></span>',
        title: 'Delete',
        onClick: (event: CalendarSchedulerEvent): void => {
            console.log('Pressed action \'Delete\' on event ' + event.id);
        }
    },
    {
        when: 'cancelled',
        label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">autorenew</i></span>',
        title: 'Restore',
        onClick: (event: CalendarSchedulerEvent): void => {
            console.log('Pressed action \'Restore\' on event ' + event.id);
        }
    }
];
events: CalendarSchedulerEvent[];
@ViewChild(CalendarSchedulerViewComponent) calendarScheduler: CalendarSchedulerViewComponent;




  constructor(public dialog: MatDialog,@Inject(LOCALE_ID) locale: string,private appService: AppServiceService, private dateAdapter: DateAdapter) {
    this.locale = locale;
    this.segmentModifier = ((segment: SchedulerViewHourSegment): void => {
      segment.isDisabled = !this.isDateValid(segment.date);
  }).bind(this);

  this.eventModifier = ((event: CalendarSchedulerEvent): void => {
      event.isDisabled = !this.isDateValid(event.start);
  }).bind(this);

  this.dateOrViewChanged();
    

   }

  ngOnInit(): void {
    this.appService.getEvents(this.actions)
            .then((events: CalendarSchedulerEvent[]) => this.events = events);
  }

  viewDaysOptionChanged(viewDays: number): void {
    viewDays ==3;
    console.log('viewDaysOptionChanged', viewDays);
    this.calendarScheduler.setViewDays(viewDays);
}

changeDate(date: Date): void {
    console.log('changeDate', date);
    this.viewDate = date;
    this.dateOrViewChanged();
}

changeView(view: CalendarView): void {
    console.log('changeView', view);
    this.view = view;
    this.dateOrViewChanged();
}

dateOrViewChanged(): void {
  if (this.startsWithToday) {
      this.prevBtnDisabled = !this.isDateValid(subPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1));
      this.nextBtnDisabled = !this.isDateValid(addPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1));
  } else {
      this.prevBtnDisabled = !this.isDateValid(endOfPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, subPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1)));
      this.nextBtnDisabled = !this.isDateValid(startOfPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, addPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1)));
  }

  if (this.viewDate < this.minDate) {
      this.changeDate(this.minDate);
  } else if (this.viewDate > this.maxDate) {
      this.changeDate(this.maxDate);
  }
}

private isDateValid(date: Date): boolean {
  return /*isToday(date) ||*/ date >= this.minDate && date <= this.maxDate;
}

viewDaysChanged(viewDays: number): void {
  console.log('viewDaysChanged', viewDays);
  this.viewDays = viewDays;
}

dayHeaderClicked(day: SchedulerViewDay): void {
  console.log('dayHeaderClicked Day', day);
}

hourClicked(hour: SchedulerViewHour): void {
  console.log('hourClicked Hour', hour);
}

segmentClicked(action: string, segment: SchedulerViewHourSegment): void {
  console.log('segmentClicked Action', action);
  console.log('segmentClicked Segment', segment);
}

eventClicked(action: string, event: CalendarSchedulerEvent): void {
  console.log('eventClicked Action', action);
  console.log('eventClicked Event', event);
}

eventTimesChanged({ event, newStart, newEnd, type }: SchedulerEventTimesChangedEvent): void {
  console.log('eventTimesChanged Type', type);
  console.log('eventTimesChanged Event', event);
  console.log('eventTimesChanged New Times', newStart, newEnd);
  const ev: CalendarSchedulerEvent = this.events.find(e => e.id === event.id);
  ev.start = newStart;
  ev.end = newEnd;
  this.refresh.next();
}


  delete(){
    Swal.fire({
      title: 'Are you sure you want to delete the session',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Successfully deleted session',
          'success'
        )
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DisplaysessionComponent, {
      width: '350px',
      height:'310px'
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      Swal.fire({
      
        icon: 'error',
        title: 'Session already exists. Please try again',
        
        confirmButtonText: 'Ok',
        
      })
      
    });
  }
  
  

}

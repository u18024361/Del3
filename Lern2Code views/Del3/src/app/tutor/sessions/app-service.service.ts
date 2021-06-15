import { Injectable } from '@angular/core';
import {
  CalendarSchedulerEvent,
  CalendarSchedulerEventStatus,
  CalendarSchedulerEventAction
} from 'angular-calendar-scheduler';
import {
  addDays,
  startOfHour,
  addHours,
  subHours,
  setHours,
  subMinutes,
  addMinutes,
  startOfDay,
  setMinutes
} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  getEvents(actions: CalendarSchedulerEventAction[]): Promise<CalendarSchedulerEvent[]> {
    const events = [
      
<CalendarSchedulerEvent>{
    id: '3',
    start: addDays(startOfHour(new Date()), 3),
    end: addDays(addHours(startOfHour(new Date()), 2), 3),
    title: 'Luca Zax',
    content: 'INF272',
    color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
    actions: actions,
   
    isClickable: true,
    isDisabled: false
},



<CalendarSchedulerEvent>{
  id: '22',
  start: subHours(addDays(startOfHour(new Date()), 2), 3),
  end: subHours(addDays(addHours(startOfHour(new Date()), 1), 2), 2),
  title: 'Hermione Granger',
  content: 'INF272',
  color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
  actions: actions,

  isClickable: true,
  isDisabled: false
},


<CalendarSchedulerEvent>{
  id: '23',
  start: subHours(addDays(startOfHour(new Date()), 4), 3),
  end: subHours(addDays(addHours(startOfHour(new Date()), 1), 4), 2),
  title: 'Luca Zax',
  content: 'INF272',
  color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
  actions: actions,

  isClickable: true,
  isDisabled: false
},
<CalendarSchedulerEvent>{
  id: '23',
  start: subHours(addDays(startOfHour(new Date()), 1), 3),
  end: subHours(addDays(addHours(startOfHour(new Date()), 1), 1), 2),
  title: 'Hermione Granger',
  content: 'INF272',
  color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
  actions: actions,

  isClickable: true,
  isDisabled: false
},






    ];

    return new Promise(resolve => setTimeout(() => resolve(events), 3000));
}

  constructor() { }
}

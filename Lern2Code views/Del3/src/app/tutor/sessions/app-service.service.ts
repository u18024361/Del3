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
    title: 'INF354',
    content: 'Group Session',
    color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
    actions: actions,
   
    isClickable: true,
    isDisabled: false
},
<CalendarSchedulerEvent>{
  id: '32',
  start: addDays(startOfHour(new Date()), 1),
  end: addDays(addHours(startOfHour(new Date()), 2), 1),
  title: 'INF116',
  content: 'Group Session',
  color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
  actions: actions,
 
  isClickable: true,
  isDisabled: false
},

<CalendarSchedulerEvent>{
  id: '12',
  start: addDays(startOfHour(new Date()), 4),
  end: addDays(addHours(startOfHour(new Date()), 2), 4),
  title: 'INF354',
  content: 'Group Session',
  color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
  actions: actions,
  
  isClickable: true,
  isDisabled: false
},
<CalendarSchedulerEvent>{
  id: '22',
  start: subHours(addDays(startOfHour(new Date()), 2), 3),
  end: subHours(addDays(addHours(startOfHour(new Date()), 1), 2), 2),
  title: 'COS211',
  content: 'Group Session',
  color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
  actions: actions,

  isClickable: true,
  isDisabled: false
},


<CalendarSchedulerEvent>{
  id: '23',
  start: subHours(addDays(startOfHour(new Date()), 5), 3),
  end: subHours(addDays(addHours(startOfHour(new Date()), 1), 5), 2),
  title: 'COS211',
  content: 'Individual Session',
  color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
  actions: actions,

  isClickable: true,
  isDisabled: false
},

<CalendarSchedulerEvent>{
  id: '24',
  start: subHours(addDays(startOfHour(new Date()), 1), 3),
  end: subHours(addDays(addHours(startOfHour(new Date()), 1), 1), 2),
  title: 'COS311',
  content: 'Individual Session',
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

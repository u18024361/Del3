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
      






    ];

    return new Promise(resolve => setTimeout(() => resolve(events), 3000));
}

  constructor() { }
}

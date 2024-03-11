import { Component, OnInit } from '@angular/core';


interface Day {
  date: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  currentMonth: Date = new Date();
  weeks: Day[][] = [];

  constructor() {
    this.generateCalendar();
  }

  ngOnInit() {
  }


  generateCalendar(): void {
    this.weeks = [];

    const startDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const endDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);

    const startDate = this.getStartOfWeek(startDay);
    const endDate = this.getEndOfWeek(endDay);

    let date = new Date(startDate);

    while (date <= endDate) {
      let week: Day[] = [];
      for (let i = 0; i < 7; i++) {
        week.push({
          date: new Date(date),
          isCurrentMonth: date >= startDay && date <= endDay,
          isSelected: false
        });
        date.setDate(date.getDate() + 1);
      }
      this.weeks.push(week);
    }
  }

  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  getEndOfWeek(date: Date): Date {
    const lastday = date.getDate() - date.getDay() + 6;
    return new Date(date.setDate(lastday));
  }

  goToPreviousMonth(): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar();
  }

  goToNextMonth(): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar();
  }

  toggleDaySelection(day: Day): void {
    day.isSelected = !day.isSelected;
  }
}

import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})

export class DayComponent {
  @Input() day !: number;
  @Input() month !: number;
  year: number = 2022;
  representingDate !: any;
  curerntDayAppointments: any[] = [];
  sortCurerntDayAppointments: any[] = [];
  temp:any;
  appointmentData: any[] = [
    {
      id: 1,
      firstName: "First -1",
      lastName: "Last -1",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-03",
      time: "11:30:00"
    },
    {
      id: 2,
      firstName: "First -2",
      lastName: "Last -2",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-03",
      time: "02:30:00"
    },
    {
      id: 3,
      firstName: "First -3",
      lastName: "Last -3",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-3",
      time: "21:25:00"
    },
    {
      id: 4,
      firstName: "First -4",
      lastName: "Last -4",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-3",
      time: "14:30:00"
    },
    {
      id: 5,
      firstName: "First -5",
      lastName: "Last -5",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-3",
      time: "02:19:00"
    },
    {
      id: 6,
      firstName: "First -6",
      lastName: "Last -6",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-27",
      time: "16:30:00"
    },
    {
      id: 7,
      firstName: "First -7",
      lastName: "Last -7",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-27",
      time: "16:20:00"
    },
    {
      id: 8,
      firstName: "First -8",
      lastName: "Last -8",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-20",
      time: "16:10:00"
    },
    {
      id: 9,
      firstName: "First -9",
      lastName: "Last -9",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-09",
      time: "09:30:00"
    },
    {
      id: 10,
      firstName: "First -10",
      lastName: "Last -10",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-13",
      time: "10:30:00"
    }

  ]

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {

  }

  ngOnChanges(){
    this.representingDate = formatDate(new Date(2022, this.month, this.day), 'yyyy-MM-dd', 'en');
    this.curerntDayAppointments = this.appointmentData.filter(appointment => appointment.date == this.representingDate)
    this.sortCurerntDayAppointments = this.curerntDayAppointments.sort((a, b) => {
      if (a.time > b.time) return 1;
      else if (a.time < b.time) return -1;
      else return 0;
    })
  }

  onOpeningDialog(e: any) {
    this.dialog.open(DialogModalComponent, {
      height: '70%',
      width: '30%',
      data: {
        firstName: e.firstName,
        lastName: e.lastName,
        email: e.email,
        gender: e.gender,
        age: e.age,
        date: e.date,
        time: e.time,
      }
    })

  }
}



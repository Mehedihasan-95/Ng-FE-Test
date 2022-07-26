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
  appointmentData:any = [];


  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {   
    
  }
  ngOnChanges(){
    this.appointmentData = JSON.parse(localStorage.getItem('appointmentList') || "[]");
    this.representingDate = formatDate(new Date(2022, this.month, this.day), 'yyyy-MM-dd', 'en');
    this.curerntDayAppointments = this.appointmentData.filter((appointment: { date: any; }) => appointment.date == this.representingDate)
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
        isEditable:false,
      }
    })

  }
}



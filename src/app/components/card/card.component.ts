import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

export interface newMonths{
  monthName:string;
  monthDay:number;
  monthNumber:number;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  selectedValue : any;
  appointmentsData = [] = [
    {
      firstName: "First -1",
      lastName: "Last -1",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-03",
      time: "11:30:00"
    },
    {
      firstName: "First -2",
      lastName: "Last -2",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-03",
      time: "02:30:00"
    },
    {
      firstName: "First -3",
      lastName: "Last -3",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-03",
      time: "21:25:00"
    },
    {
      firstName: "First -4",
      lastName: "Last -4",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-03",
      time: "14:30:00"
    },
    {
      firstName: "First -5",
      lastName: "Last -5",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-03",
      time: "02:19:00"
    },
    {
      firstName: "First -6",
      lastName: "Last -6",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-27",
      time: "16:30:00"
    },
    {
      firstName: "First -7",
      lastName: "Last -7",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-27",
      time: "16:20:00"
    },
    {
       firstName: "First -8",
      lastName: "Last -8",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-20",
      time: "16:10:00"
    },
    {
      firstName: "First -9",
      lastName: "Last -9",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-09",
      time: "09:30:00"
    },
    {
     firstName: "First -10",
      lastName: "Last -10",
      email: "a@a.com",
      gender: "male",
      age: 16,
      date: "2022-12-13",
      time: "10:30:00"
    }

  ]
  months:newMonths[] = [
    {monthName: 'January', monthDay: 31, monthNumber: 0},
    {monthName: 'February', monthDay: 28, monthNumber: 1},
    {monthName: 'March', monthDay: 31, monthNumber: 2},
    {monthName: 'April', monthDay: 30, monthNumber: 3},
    {monthName: 'May', monthDay: 31, monthNumber: 4},
    {monthName: 'June', monthDay: 30 , monthNumber: 5},
    {monthName: 'July', monthDay: 31, monthNumber: 6},
    {monthName: 'August', monthDay: 31, monthNumber: 7},
    {monthName: 'September', monthDay: 30, monthNumber: 8},
    {monthName: 'October', monthDay: 31, monthNumber: 9},
    {monthName: 'November ', monthDay: 30, monthNumber: 10},
    {monthName: 'December', monthDay: 31, monthNumber: 11},
  ];
  constructor( private dialog:MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let selectedMonth = null;
    this.route.paramMap.subscribe(pra=>{
      selectedMonth = pra.get('id');      
    })
    if(selectedMonth){
      this.selectedValue = this.getMonthFromMonthNo(selectedMonth - 1);
      return;
    }
    this.selectedValue = this.getMonthFromMonthNo(new Date().getMonth());
    localStorage.setItem('appointmentList', JSON.stringify(this.appointmentsData));    
  }

  getMonthFromMonthNo(no:number){
    return this.months.find(month => month.monthNumber == no);
  }

  onCreateAppointment(){
    this.dialog.open(DialogModalComponent, {
      height: '70%',
      width:'30%',
      data:{
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        age: '',
        date: Date.now(),
        time: '',
        isEditable:true,
      }
    })
  }

}



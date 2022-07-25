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

  }

  getMonthFromMonthNo(no:number){
    return this.months.find(month => month.monthNumber == no);
  }

  opd(){
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



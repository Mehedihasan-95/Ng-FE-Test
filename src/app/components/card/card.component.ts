import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  counter = Array;
  selectedValue: any;

  months = [
    {monthName: 'January', value: 31, index: 1},
    {monthName: 'February', value: 28, index: 2},
    {monthName: 'March', value: 31, index: 3},
    {monthName: 'April', value: 30, index: 4},
    {monthName: 'May', value: 31, index: 5},
    {monthName: 'June', value: 30 , index: 6},
    {monthName: 'July', value: 31, index: 7},
    {monthName: 'August', value: 31, index: 8},
    {monthName: 'September', value: 30, index: 9},
    {monthName: 'October', value: 31, index: 10},
    {monthName: 'November ', value: 30, index: 11},
    {monthName: 'December', value: 31, index: 12},
  ];
  constructor( private dialog:MatDialog) { }

  ngOnInit(): void {
    let q = new Date();
    let x = q.getMonth()
    console.log(x);
    
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
      }
    })
  }

}

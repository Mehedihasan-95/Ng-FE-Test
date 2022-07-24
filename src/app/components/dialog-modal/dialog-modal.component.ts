import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from '@angular/common' 
export interface DialogData {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  date: string;
  time: string;
}
@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent{
  appointmentForm = this.fb.group({
    firstName: [this.data.firstName, Validators.required],
    lastName: [this.data.lastName, Validators.required],
    email: [this.data.email, [Validators.required, Validators.email]],
    gender: [this.data.gender],
    age: [this.data.age],
    date: [formatDate(new Date(this.data.date), 'yyyy-MM-dd', 'en'), Validators.required],
    time: [this.data.time, Validators.required],
  });

  ngOnInit(){
  }
  
  constructor(
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<DialogModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    store(id:any, item:any) {
     return localStorage.setItem(JSON.stringify(id), JSON.stringify(item));  
    }

  onSubmit() {
    let newDate =  formatDate(new Date(this.appointmentForm.value.date), 'yyyy-MM-dd', 'en')
    let obj = {
     "firstName": this.appointmentForm.value.firstName,  
     "lastName": this.appointmentForm.value.lastName,  
     "email": this.appointmentForm.value.email,  
     "age" : this.appointmentForm.value.age,  
     "gender": this.appointmentForm.value.gender,  
     "date": newDate,  
     "time": this.appointmentForm.value.time,
    }

    this.store(newDate, obj)
   //  let a = JSON.stringify(this.appointmentForm.value)
  }
 
  
  onClose(): void {
    this.dialogRef.close();
  }
  
}

// setInterval(()=>{
//   console.log(localStorage);
  
// },15000)

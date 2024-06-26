import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MathsService } from '../services/maths.service';



@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})



export class ReactiveFormComponent {

  _msg: string= "";

  constructor(private _msgservice: MathsService){
   this._msg = _msgservice.getmessage();
  
  }
  

  // countrylist = [
  //   "country name",
  //   "Italy",
  //   "India",
  // ]
 
  // createForm = new FormGroup({
  //   firstname: new FormControl('firstname',[Validators.required]),
  //   lastname: new FormControl('',[Validators.required]),
  //   email: new FormControl('',[Validators.required , Validators.email]),
  //   country: new FormControl('',[Validators.required]),
  // })

  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    
  });

  // onSubmit() {
  //   if (this.createForm.valid) {
  //     console.log(this.createForm.value);
  //   } else {
  //     console.log('Form is not valid');
  //   }
  // }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}

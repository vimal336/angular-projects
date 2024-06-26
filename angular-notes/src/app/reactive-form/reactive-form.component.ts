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
  

  contactForm = new FormGroup({
    firstName : new FormControl('',[Validators.required, Validators.minLength(2)]),
    lastName: new FormControl({
        value: 'Vimal',
        disabled: false
    },[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl("",[Validators.required,Validators.email]),
    gender: new FormControl("",[Validators.required]),
    isMarried: new FormControl("",[Validators.requiredTrue]),
    country: new FormControl("",[Validators.required]),
    address: new FormGroup({
      city: new FormControl("",[Validators.required]),
      street: new FormControl("",[Validators.required]),
      pincode:new FormControl("",[Validators.required])
    })
})

get firstname() {
  return this.contactForm.get('firstName')
}
get lastname() {
  return this.contactForm.get('lastName')
}
get email() {
  return this.contactForm.get('email')
}
get gender() {
  return this.contactForm.get('gender')
}
get marriedStatus() {
  return this.contactForm.get('isMarried')
}
get country() {
  return this.contactForm.get('country')
}
get city() {
  return this.contactForm.get('address')?.get('city')
}
get street() {
  return this.contactForm.get('address')?.get('street')
}
get pincode() {
  return this.contactForm.get('address')?.get('pincode')
}

onSubmit() {
    console.log(this.contactForm.value)
}




}

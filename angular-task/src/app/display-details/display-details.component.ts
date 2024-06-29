import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-details',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css'
})
export class DisplayDetailsComponent {

  displayformData: any[] = [];

  displayemployees: any[] = [];

  displaycontactForm = new FormGroup({
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
return this.displaycontactForm.get('firstName')
}
get lastname() {
  return this.displaycontactForm.get('lastName')
}
get email() {
  return this.displaycontactForm.get('email')
}
get gender() {
  return this.displaycontactForm.get('gender')
}
get marriedStatus() {
  return this.displaycontactForm.get('isMarried')
}
get country() {
  return this.displaycontactForm.get('country')
}
get city() {
  return this.displaycontactForm.get('address')?.get('city')
}
get street() {
  return this.displaycontactForm.get('address')?.get('street')
}
get pincode() {
  return this.displaycontactForm.get('address')?.get('pincode')
}

onSubmit() {
    console.log(this.displaycontactForm.value)
    //this.displayemployees.push(this.displaycontactForm.value);
}

}

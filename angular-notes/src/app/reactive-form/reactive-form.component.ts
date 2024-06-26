import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})



export class ReactiveFormComponent {

  countrylist = [
    "country name",
    "Italy",
    "India",
  ]
 
  createForm = new FormGroup({
    firstname: new FormControl('firstname',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    country: new FormControl('',[Validators.required]),
  })

  onSubmit() {
    if (this.createForm.valid) {
      console.log(this.createForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

}

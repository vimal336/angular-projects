import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisplayFormComponent } from '../display-form/display-form.component';

@Component({
  selector: 'app-display-details',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,DisplayFormComponent],
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css'
})
export class DisplayDetailsComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form structure and validations
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      isMarried: [false, Validators.required],
      country: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        pincode: ['', Validators.required]
      })
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
    // Handle form submission here
    console.log(this.contactForm.value);
  }

}

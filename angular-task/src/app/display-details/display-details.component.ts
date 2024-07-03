import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisplayFormComponent } from '../display-form/display-form.component';
import { Employee } from '../employeemodal';


@Component({
  selector: 'app-display-details',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,DisplayFormComponent],
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css'
})
export class DisplayDetailsComponent {
  employeeForm: FormGroup;

  employee: Employee[] = [];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      employmentStatus: ['', Validators.required],
      dateofjoin: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        pincode: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {}

  get fullName() {
    return this.employeeForm.get('fullName');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get gender() {
    return this.employeeForm.get('gender');
  }
  
  get role() {
    return this.employeeForm.get('role');
  }


  get employmentStatus() {
    return this.employeeForm.get('employmentStatus');
  }

  get dateofjoin() {
    return this.employeeForm.get('dateofjoin');
  }

  get city() {
    return this.employeeForm.get('address.city');
  }

  get street() {
    return this.employeeForm.get('address.street');
  }

  get pincode() {
    return this.employeeForm.get('address.pincode');
  }

  onSubmit() {
    this.employee = this.employeeForm.value;
    alert('Employee Details submitted successfully!');
    this.employeeForm.reset();
  }
  
}

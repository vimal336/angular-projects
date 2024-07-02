import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  employees: any[] = [];
  editingIndex: number | null = null;
  isEditMode = false;

  contactForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl(
      {
        value: '',
        disabled: false,
      },
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z]+$'),
      ]
    ),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
    ]),
    gender: new FormControl('', [Validators.required]),
    salary: new FormControl(0, [
      Validators.required,
      Validators.min(1000),
      Validators.max(100000),
    ]),
    isMarried: new FormControl('', [Validators.required]),
    address: new FormGroup({
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
    }),
  });

  get firstname() {
    return this.contactForm.get('firstName');
  }
  get lastname() {
    return this.contactForm.get('lastName');
  }
  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }
  get salary() {
    return this.contactForm.get('salary');
  }
  get mobileNumber() {
    return this.contactForm.get('salary');
  }
  get isMarried() {
    return this.contactForm.get('isMarried');
  }
  get country() {
    return this.contactForm.get('address')?.get('country');
  }
  get city() {
    return this.contactForm.get('address')?.get('city');
  }
  get street() {
    return this.contactForm.get('address')?.get('street');
  }
  get pincode() {
    return this.contactForm.get('address')?.get('pincode');
  }

  onSubmit() {
    if (this.isEditMode && this.editingIndex !== null) {
      this.employees[this.editingIndex] = this.contactForm.value;
      this.isEditMode = false;
      this.editingIndex = null;
    } else {
      this.employees.push({ ...this.contactForm.value });

      alert('Form submitted successfully!');
    }
    this.contactForm.reset();
  }

  editEmployee(index: number) {
    this.isEditMode = true;
    this.editingIndex = index;
    const employeeToEdit = { ...this.employees[index] };
    this.contactForm.setValue(employeeToEdit);
  }

  cancelEdit() {
    this.isEditMode = false;
    this.editingIndex = null;
    this.contactForm.reset();
  }
}

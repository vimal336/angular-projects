import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../store/employee.service';
import { FormQuery } from '../store/form.query';
import { FormState } from '../store/employee.model';

@Component({
  selector: 'app-form-details',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './form-details.component.html',
  styleUrl: './form-details.component.css'
})
export class FormDetailsComponent implements OnInit {
  form: FormGroup;

  submittedData: any[] = [];

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private formQuery: FormQuery
  ) {
  
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.formQuery.select().subscribe((state) => {
      if (state) {
        this.form.patchValue(state);
        console.log(state)
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formService.updateForm(this.form.value);
      console.log(this.formService)
      this.submittedData.push(this.form.value);
      // console.log(this.form.value)
    }
  }
}

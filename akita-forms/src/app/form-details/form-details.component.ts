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
  form: FormState = { id:null, name: '', email: '' };

     constructor(private formService: FormService, private formQuery: FormQuery) {}

     
     ngOnInit() {
      this.formQuery.select(state => state).subscribe(form => {
        if (form) {
          this.form = { ...form };
        }
      });
    }

     onSubmit() {
       this.formService.updateForm(this.form);
     }
   }

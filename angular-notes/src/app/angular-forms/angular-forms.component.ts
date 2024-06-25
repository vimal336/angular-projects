import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './angular-forms.component.html',
  styleUrl: './angular-forms.component.css',
})
export class AngularFormsComponent {
  constructor() {}

  submit(form: NgForm) {
    console.log(form.value);
  }
}

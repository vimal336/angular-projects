import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-forms.component.html',
  styleUrl: './angular-forms.component.css'
})
export class AngularFormsComponent {

  constructor(){}

   
  submit(form:NgForm){

  }

}

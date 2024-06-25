import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
 
  createForm = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
  })

}

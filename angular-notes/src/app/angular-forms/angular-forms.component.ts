import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angular-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-forms.component.html',
  styleUrl: './angular-forms.component.css'
})
export class AngularFormsComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    const myobs$ = new Observable(obs=>{
      console.log("my observable");
      obs.next('100')
    })
  }

   
  submit(form:NgForm){
    console.log(form.value)

  }



}

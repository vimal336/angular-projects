import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-angular-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-forms.component.html',
  styleUrl: './angular-forms.component.css'
})
export class AngularFormsComponent implements OnInit {



  constructor(){
  
  }

  ngOnInit(): void {
  const myobs$ = new Observable(myobs => {
    console.log("My Observable");
    myobs.next("200")
    setTimeout(() => {
      myobs.next("400")
    }, 400);
    console.log("end observable")
  },

)

myobs$.subscribe(obs=>{
  console.log(obs);
},

error => {
  console.log(error)
}

)



}

  
  submit(form:NgForm){
    console.log(form.value)

  }



}

import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { interval, map, of} from 'rxjs';


@Component({
  selector: 'app-rxjs-observer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './rxjs-observer.component.html',
  styleUrl: './rxjs-observer.component.css'
})
export class RxjsObserverComponent {
  
  constructor(){
    const numbers$ = of([1,2,3,4,5])
    numbers$.subscribe((data)=>{
      console.log("subscriber", data);
    })
  }
}

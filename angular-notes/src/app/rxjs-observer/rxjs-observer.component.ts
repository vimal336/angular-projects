import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { interval, map, Subscription } from 'rxjs';


@Component({
  selector: 'app-rxjs-observer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './rxjs-observer.component.html',
  styleUrl: './rxjs-observer.component.css'
})
export class RxjsObserverComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  
  ngOnInit(): void {
   const subscription = interval(1000).pipe().subscribe({
     next: (val) => console.log(val)
   });

 
   this.destroyRef.onDestroy(()=>{
    Subscription.unsubscribe();
  })


  }
}

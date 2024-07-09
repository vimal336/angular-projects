import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { from, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-observer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rxjs-observer.component.html',
  styleUrl: './rxjs-observer.component.css',
})
export class RxjsObserverComponent {
  constructor() {
    const numbers$ = of([1, 2, 3, 4, 5]);
    numbers$.subscribe((data) => {
      console.log('subscriber', data);
    });
    const fromOperator$ = from([6, 2, 3, 4, 5]);
    fromOperator$.subscribe((data) => {
      console.log('subscriber', data);
    });

    const observable1 = interval(400);
    const observable2 = interval(300);

    const subscription = observable1.subscribe((x) =>
      console.log('first: ' + x)
    );
    const childSubscription = observable2.subscribe((x) =>
      console.log('second: ' + x)
    );

    subscription.add(childSubscription);

    setTimeout(() => {
      // Unsubscribes BOTH subscription and childSubscription
      subscription.unsubscribe();
    }, 1000);
  }
}

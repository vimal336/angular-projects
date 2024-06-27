import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rxjs-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-component.component.html',
  styleUrl: './rxjs-component.component.css'
})
export class RxjsComponentComponent implements OnInit{

  ofValues: number[] = [];
  fromValues: number[] = [];
  customObservableValues: number[] = [];

  ngOnInit(): void {
    this.createObservable();

    const ofoperator = of(4, 5, 6);
    ofoperator.subscribe(value => {
      this.ofValues.push(value);
      console.log(value);
    });

    const fromoperator = from([10, 20, 30]);
    fromoperator.subscribe(value => {
      this.fromValues.push(value);
      console.log(value);
    });
  }

  createObservable() {
    // Create a custom observable that emits values 1, 2, and 3
    const customObservable = new Observable<number>(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    // Subscribe to the custom observable
    customObservable.subscribe(value => {
      this.customObservableValues.push(value);
      console.log(value);
    });
  }
}


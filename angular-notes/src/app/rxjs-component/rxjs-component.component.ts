import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { of } from 'rxjs';
import { from, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-component.component.html',
  styleUrl: './rxjs-component.component.css',
})
export default class RxjsComponentComponent implements OnInit {
  ofValues: number[] = [];
  fromValues: number[] = [];
  customObservableValues: number[] = [];
  intervalValue: number[] = [];
  ofval: string[] = [];




  ngOnInit(): void {
    this.createObservable();

   
    of('task1', 'task2', 'task3').subscribe((ofval) => this.ofval.push(ofval));
    console.log(this.ofval);

    const observable = of(15, 16, 18, 20, 21).pipe(
      filter(value => value % 2 === 0)
    );
    observable.subscribe(value => console.log(value));

    const mapobservable = of(15, 16, 18, 20, 21).pipe(
      map(value => value * 2)
    );
    mapobservable.subscribe(value => console.log(value));


    const source = interval(1000);

    const subscription = source
      .pipe(
        take(5)
      )
      .subscribe(
        (value) => console.log(value),
        null,
        () => {
          console.log('Complete!'); 
          subscription.unsubscribe(); 
        }
      );

    const ofoperator = of(4, 5, 6);
    ofoperator.subscribe((value) => {
      this.ofValues.push(value);
      console.log(value);
    });

    const fromoperator = from([10, 20, 30]);
    fromoperator.subscribe((value) => {
      this.fromValues.push(value);
      console.log(value);
    });
  }

;

  createObservable() {
    const customObservable = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    customObservable.subscribe((value) => {
      this.customObservableValues.push(value);
      console.log(value);
    });
  }


  ofo =  of(7, 3, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));


}

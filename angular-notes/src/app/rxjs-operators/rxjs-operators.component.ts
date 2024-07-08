import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent implements OnInit{
  values: number[] = [];
  intervalSubscription: Subscription | undefined;
  routeSubscription: Subscription | undefined;

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log(data)
    });
   this.intervalSubscription = interval(1000).subscribe( c =>{
  console.log(c)
})

let customobservable = Observable.create( observer =>{

let count  = 0;


})


}

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
    }
  }

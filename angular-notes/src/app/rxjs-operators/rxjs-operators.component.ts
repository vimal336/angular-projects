import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, range, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Data } from '@angular/router';
import { RxjsObserverComponent } from '../rxjs-observer/rxjs-observer.component';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [FormsModule,CommonModule,RxjsObserverComponent],
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
  // console.log(c)
})

//Creating Custom observable 

let customobservable = Observable.create( (observer:any) =>{

let count  = 0;

let invalidInterval = setInterval(()=>{
observer.next(count);
if(count > 3){
  observer.error('count is greater than 3');
  clearInterval(invalidInterval);
}

if(count > 2){
  observer.complete();
}

count++
},1000);

})

this.intervalSubscription = customobservable.pipe(map(data => {
  return 'count is ' + (data);
})).subscribe( (data: number) =>{
  console.log(data)
}, (error: any) =>{
  console.log(error)
},()=>{
  console.log("completed")
})

const numbers = range(5, 8);
 
numbers.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completee!')
});

}

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
    //this.routeSubscription?.unsubscribe();
    }
  }

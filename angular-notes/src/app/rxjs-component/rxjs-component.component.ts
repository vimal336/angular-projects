import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-component',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-component.component.html',
  styleUrl: './rxjs-component.component.css'
})
export class RxjsComponentComponent implements OnInit{

  createObservable(){
    const myobservable$ = new Observable((obs)=>{
      obs.next(1);
      obs.next(2);
      obs.next(3);
      obs.complete();
    })
    myobservable$.subscribe((obs)=>{
      console.log(obs);
    }),
    (error:any)=>{
       console.log(error)
    },
    () => {
      console.log('Completed');
    }
  }

  ngOnInit(): void {
    this.createObservable();
  }
 
}


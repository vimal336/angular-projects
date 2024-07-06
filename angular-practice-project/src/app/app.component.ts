import { Component, OnInit } from '@angular/core';
import { MathsService } from './services/maths.service';
import { TodoservService } from './services/todoserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-practice-project';
  counter: number = 100;
  constructor(public _maths: MathsService,
              public _todoserv: TodoservService,
  ){
   
  }

  ngOnInit(): void {
    
  }
}

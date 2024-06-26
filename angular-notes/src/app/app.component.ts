import '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MathsService } from './services/maths.service';
import ChildCompComponent from './child-comp/child-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { Subject } from './subject.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule,ChildCompComponent,ParentCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'ANGULAR 17 LEARNING NOTES'
   
 _msg: string= "";

constructor(private _msgservice: MathsService){
 this._msg = _msgservice.getmessage();

}

randomNumber: number = 0;


subjectParent: Subject[] = [
  { subid: 1, subname: 'Tamil' },
  { subid: 2, subname: 'English' },
  { subid: 3, subname: 'Maths' },
  { subid: 4, subname: 'Science' },
  { subid: 5, subname: 'Social' }
  
  ];

public onNumberGenerated(randomNumber: number){
  this.randomNumber = randomNumber;
}
  
   
}

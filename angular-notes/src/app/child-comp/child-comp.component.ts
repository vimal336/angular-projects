import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export default class ChildCompComponent {

 constructor(){
 }

 

 @Input() subjectChild:any
 @Output() private numbergenerated1 = new  EventEmitter<number>();

 public generateNumber(){
  const randomNumber = Math.random();
  this.numbergenerated1.emit(randomNumber);
 }


}

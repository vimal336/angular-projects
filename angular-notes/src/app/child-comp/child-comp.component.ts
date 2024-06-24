import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export default class ChildCompComponent {

  @input() name:string

}

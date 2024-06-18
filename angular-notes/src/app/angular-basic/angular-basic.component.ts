import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-basic',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-basic.component.html',
  styleUrl: './angular-basic.component.css'
})
export class AngularBasicComponent {
  interpolation = 'Interpolation(one way binding)';
  names = 'Two way binding ';
  angular ="One Way Binding"
  doing = "Property Binding"


  func = "creating functions in interpolation"
  getfunc(){
    return this.func
  };
  clickcount = 0;
  clickMe(){
     this.clickcount++;
  }
  onclick(){
    this.clickcount--;
 }
  getMax(num1:number, num2:number){
     return Math.max(num1,num2)
  }
  color = "brown";
  isdisabled = "true"

  val= ''
  handleInput(event:any) {
    this.val = (event.target as HTMLInputElement).value;
  }
  val1= ''
  handleInput1(event:any) {
    this.val1 = (event.target as HTMLInputElement).value;
  }
}

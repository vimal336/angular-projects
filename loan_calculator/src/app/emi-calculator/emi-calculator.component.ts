import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  emi = 0;
  interest;
  amount;
  months;
  rate;


  constructor() { }

  ngOnInit(): void {
  }
 

  calculateResult (pamount:string, duration:string, loanType:string){
  console.log(pamount, duration, loanType);
  this.emi = 0;
  this.amount = parseFloat(pamount)
  this.months = parseFloat(duration)
  this.rate = parseFloat(loanType)
  this.interest = (this.amount*(this.rate*0.01))/this.months;
  this.emi = ((this.amount/this.months)+ this.interest);
   

  }

}

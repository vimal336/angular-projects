import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [FormsModule,NgModule],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent implements OnInit{
  values: number[] = [];
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(count => {
      this.values.push(count);
    });
  }

  ngOnDestroy(): void {
    // Clean up the subscription when the component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
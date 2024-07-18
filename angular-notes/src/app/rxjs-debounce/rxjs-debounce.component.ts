import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, debounceTime } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-debounce',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './rxjs-debounce.component.html',
  styleUrl: './rxjs-debounce.component.css'
})
export class RxjsDebounceComponent implements OnInit {
  searchControl: FormControl;
  searchText: string = '';
  searchControl2: FormControl<string | null>;
  searchControl1: any;
  combinedValue: string | undefined;

  constructor() {
    this.searchControl = new FormControl('');
    this.searchControl = new FormControl('');
    this.searchControl2 = new FormControl('');
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000) 
      )
      .subscribe(value => {
        this.searchText = value;
        console.log(value);
      });

      combineLatest([
        this.searchControl1.valueChanges.pipe(debounceTime(300)),
        this.searchControl2.valueChanges.pipe(debounceTime(300))
      ]).subscribe(([value1, value2]) => {
        this.combinedValue = `Value 1: ${value1}, Value 2: ${value2}`;
        console.log(this.combinedValue); // You can replace this with your logic
      });
  }
}

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rxjs-debounce',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-debounce.component.html',
  styleUrl: './rxjs-debounce.component.css'
})
export class RxjsDebounceComponent {
  searchControl: FormControl;
  searchText: string = '';

  constructor() {
    this.searchControl = new FormControl('');
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000) // Wait for 1 second pause in events
      )
      .subscribe(value => {
        this.searchText = value;
        console.log(value); // You can replace this with your search logic
      });
  }
}

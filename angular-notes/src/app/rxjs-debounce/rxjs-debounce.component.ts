import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-debounce',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './rxjs-debounce.component.html',
  styleUrl: './rxjs-debounce.component.css'
})
export class RxjsDebounceComponent {
  searchControl: FormControl;
  searchText: string = '';
  searchControl2: FormControl<string | null>;

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
  }
}

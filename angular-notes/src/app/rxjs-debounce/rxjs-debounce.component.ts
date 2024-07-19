import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { MathsService } from '../services/maths.service';

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
  data: any;
  constructor(private dataService: MathsService) {
    this.searchControl = new FormControl('');
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (results) => {
        this.data = results;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
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

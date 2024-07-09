import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rxjs-observer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './rxjs-observer.component.html',
  styleUrl: './rxjs-observer.component.css'
})
export class RxjsObserverComponent implements OnInit {
  ngOnInit(): void {
   private destroyref = inject(DestroyRef)
  }

}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayDetailsComponent } from '../display-details/display-details.component';

@Component({
  selector: 'app-display-form',
  standalone: true,
  imports: [CommonModule,FormsModule,DisplayDetailsComponent],
  templateUrl: './display-form.component.html',
  styleUrl: './display-form.component.css'
})
export class DisplayFormComponent {
  @Input() employee: any; 
  date = new Date();
}

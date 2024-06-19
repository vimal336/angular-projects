import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.css'
})
export class AngularPipesComponent {
 ucasepipe:string = "hello world";
}

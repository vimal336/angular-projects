import '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MathsService } from './services/maths.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'ANGULAR 17 LEARNING NOTES'
   
 _msg: string= "";

// constructor(private _msgservice: MathsService){
//  this._msg = _msgservice.getmessage();

// }
   
}

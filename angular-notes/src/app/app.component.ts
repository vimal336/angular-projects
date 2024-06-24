import '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MathsService } from './services/maths.service';
import ChildCompComponent from './child-comp/child-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule,ChildCompComponent,ParentCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'ANGULAR 17 LEARNING NOTES'
   
 _msg: string= "";

// constructor(private _msgservice: MathsService){
//  this._msg = _msgservice.getmessage();

// }


subjectParent: object = [
  { id: 1, name: 'Tamil' },
  { id: 2, name: 'English' },
  { id: 3, name: 'Maths' },
  { id: 4, name: 'Science' },
  { id: 5, name: 'Social' }
  
  ]
  
   
}

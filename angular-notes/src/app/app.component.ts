import '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MathsService } from './services/maths.service';
import ChildCompComponent from './child-comp/child-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { Subject } from './subject.interface';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule,ChildCompComponent,ParentCompComponent,
    AgGridComponent,AgGridAngular,AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'ANGULAR 17 LEARNING NOTES'
   
 _msg: string= "";

constructor(private _msgservice: MathsService){
 this._msg = _msgservice.getmessage();

}

randomNumber: number = 0;


subjectParent: Subject[] = [
  { subid: 1, subname: 'Tamil' },
  { subid: 2, subname: 'English' },
  { subid: 3, subname: 'Maths' },
 
  
  ];

public onNumberGenerated(randomNumber: number){
  this.randomNumber = randomNumber;
}
  
rowData = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];


colDefs: ColDef[] = [
  { field: "make" },
  { field: "model" },
  { field: "price" },
  { field: "electric" }
];
   
}

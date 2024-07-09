import { Component } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridModule,AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent {

}


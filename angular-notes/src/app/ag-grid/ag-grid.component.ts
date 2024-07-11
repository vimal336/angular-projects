import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Component } from '@angular/core';
import { AgGridApiComponent } from '../ag-grid-api/ag-grid-api.component';


@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridModule,AgGridAngular,AgGridApiComponent],
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})

export class AgGridComponent {
   
  rowData = [
    { company: "Tesla", model: "Model Y", price: 64950, electric: true },
    { company: "Ford", model: "F-Series", price: 33850, electric: false },
    { company: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  colDefs: ColDef[] = [
    { field: "company", headerName: "Company",  headerTooltip: "Name of the company", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    { field: "electric", sortable: true, filter: true, editable: true }
  ];

  gridOptions: GridOptions = {
    defaultColDef: {
      flex:1,
      minWidth:100,
      sortable: true,
      filter: true,
      resizable: true
    },
    pagination: true,
    paginationPageSize: 10,
    rowSelection: 'multiple',
    domLayout: 'autoHeight',
    onGridReady: this.onGridReady.bind(this),
    onRowClicked: this.onRowClicked.bind(this)
  };

  onGridReady(params: any) {
    console.log('Grid is ready');
  }

  onRowClicked(event: any) {
    console.log('Row clicked', event.data);
  }
} 
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef,GridApi,GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-api',
  standalone: true,
  imports: [AgGridModule,AgGridAngular],
  templateUrl: './ag-grid-api.component.html',
  styleUrl: './ag-grid-api.component.css'
})


export class AgGridApiComponent implements OnInit {
  private gridApi!: GridApi<any>;

  userList: any []=[];

  public rowSelection: 'single' | 'multiple' = 'multiple';
  colDefs: ColDef[] = [
    { field: "id", headerName:'User Id',headerCheckboxSelection: true, checkboxSelection: true,
      cellRenderer:(item:any)=>{
        return "EMP-"+ item.value
      }
    },
    { field: "name", headerName: 'Name',filter:'agTextColumnFilter' },
    { field: "username", headerName:'User Name' },
    { field: "email" ,headerName:'E-mail', editable: true},
   
  ];

  defaultColDef = {
    flex:1,
    minWdith:100
  }dttegger

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.getUser();
  }
  onGridReady(event: GridReadyEvent<any>) {
    this.gridApi = event.api;
  }

  onBtExport() {
    this.gridApi.exportDataAsCsv();
  }

  getUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList =  res;
    })
  }
}

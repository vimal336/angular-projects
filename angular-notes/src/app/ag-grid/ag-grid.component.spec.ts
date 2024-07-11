import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridComponent } from './ag-grid.component';
import { AgGridApiComponent } from '../ag-grid-api/ag-grid-api.component';


describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridComponent,AgGridApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

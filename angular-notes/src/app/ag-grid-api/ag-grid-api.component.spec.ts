import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridApiComponent } from './ag-grid-api.component';

describe('AgGridApiComponent', () => {
  let component: AgGridApiComponent;
  let fixture: ComponentFixture<AgGridApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgGridApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

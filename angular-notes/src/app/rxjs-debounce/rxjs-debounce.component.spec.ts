import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDebounceComponent } from './rxjs-debounce.component';

describe('RxjsDebounceComponent', () => {
  let component: RxjsDebounceComponent;
  let fixture: ComponentFixture<RxjsDebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsDebounceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHttpAuthComponent } from './angular-http-auth.component';

describe('AngularHttpAuthComponent', () => {
  let component: AngularHttpAuthComponent;
  let fixture: ComponentFixture<AngularHttpAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularHttpAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularHttpAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

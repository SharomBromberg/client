import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotateComponent } from './quotate.component';

describe('QuotateComponent', () => {
  let component: QuotateComponent;
  let fixture: ComponentFixture<QuotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuotateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

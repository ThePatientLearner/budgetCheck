import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpricesComponent } from './stockprices.component';

describe('StockpricesComponent', () => {
  let component: StockpricesComponent;
  let fixture: ComponentFixture<StockpricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockpricesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

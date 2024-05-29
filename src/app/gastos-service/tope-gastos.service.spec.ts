import { TestBed } from '@angular/core/testing';

import { TopeGastosService } from './tope-gastos.service';

describe('TopeGastosService', () => {
  let service: TopeGastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopeGastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

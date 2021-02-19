import { TestBed } from '@angular/core/testing';

import { SolucionesService } from './soluciones.service';

describe('SolucionesService', () => {
  let service: SolucionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolucionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

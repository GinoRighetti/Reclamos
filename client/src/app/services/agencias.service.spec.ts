import { TestBed } from '@angular/core/testing';

import { AgenciasService } from './agencias.service';

describe('UsuariosService', () => {
  let service: AgenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DetalleRedService } from './detalle-red.service';

describe('DetalleRedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleRedService = TestBed.get(DetalleRedService);
    expect(service).toBeTruthy();
  });
});

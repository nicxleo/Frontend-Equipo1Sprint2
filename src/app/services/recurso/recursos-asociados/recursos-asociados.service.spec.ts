import { TestBed } from '@angular/core/testing';

import { RecursosAsociadosService } from './recursos-asociados.service';

describe('RecursosAsociadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecursosAsociadosService = TestBed.get(RecursosAsociadosService);
    expect(service).toBeTruthy();
  });
});

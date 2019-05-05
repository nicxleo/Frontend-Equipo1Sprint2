import { TestBed } from '@angular/core/testing';

import { ProyectosRedService } from './proyectos-red.service';

describe('ProyectosRedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyectosRedService = TestBed.get(ProyectosRedService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PersonasAsignadasService } from './personas-asignadas.service';

describe('PersonasAsignadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonasAsignadasService = TestBed.get(PersonasAsignadasService);
    expect(service).toBeTruthy();
  });
});

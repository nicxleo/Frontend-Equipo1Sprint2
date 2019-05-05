import { TestBed } from '@angular/core/testing';

import { AddRedService } from './add-red.service';

describe('AddRedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddRedService = TestBed.get(AddRedService);
    expect(service).toBeTruthy();
  });
});

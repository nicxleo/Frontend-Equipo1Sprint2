import { TestBed } from '@angular/core/testing';

import { AdvanceRedRestClientService } from './advance-red-rest-client.service';

describe('AdvanceRedRestClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvanceRedRestClientService = TestBed.get(AdvanceRedRestClientService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ComentarRestClientService } from './comentar-rest-client.service';

describe('ComentarRestClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComentarRestClientService = TestBed.get(ComentarRestClientService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ResourceDetailsRestClientService } from './resource-details-rest-client.service';


describe('ResourceDetailsRestClientService', () => {
  let resourceDetailsRestClientService: ResourceDetailsRestClientService;
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpModule],
    providers: [ResourceDetailsRestClientService],
  }));

  it('should be created', () => {
    const service: ResourceDetailsRestClientService = TestBed.get(ResourceDetailsRestClientService);
    expect(service).toBeTruthy();
  });
});

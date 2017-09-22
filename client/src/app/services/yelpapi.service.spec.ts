import { TestBed, inject } from '@angular/core/testing';

import { YelpapiService } from './yelpapi.service';

describe('YelpapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YelpapiService]
    });
  });

  it('should be created', inject([YelpapiService], (service: YelpapiService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { AreaDataService } from './area-data.service';

describe('AreaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaDataService = TestBed.get(AreaDataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NgxBeehiveService } from './ngx-beehive.service';

describe('NgxBeehiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBeehiveService = TestBed.get(NgxBeehiveService);
    expect(service).toBeTruthy();
  });
});

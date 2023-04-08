import { TestBed } from '@angular/core/testing';

import { MikeService } from './mike.service';

describe('MikeService', () => {
  let service: MikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

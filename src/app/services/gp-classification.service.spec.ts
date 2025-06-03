import { TestBed } from '@angular/core/testing';

import { GpClassificationService } from './gp-classification.service';

describe('GpClassificationService', () => {
  let service: GpClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

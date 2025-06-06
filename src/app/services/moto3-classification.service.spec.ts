import { TestBed } from '@angular/core/testing';

import { Moto3ClassificationService } from './moto3-classification.service';

describe('Moto3ClassificationService', () => {
  let service: Moto3ClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Moto3ClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Moto2ClassificationService } from './moto2-classification.service';

describe('Moto2ClassificationService', () => {
  let service: Moto2ClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Moto2ClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

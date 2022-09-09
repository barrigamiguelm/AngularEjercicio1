import { TestBed } from '@angular/core/testing';

import { InyectNumbersService } from './inyect-numbers.service';

describe('InyectNumbersService', () => {
  let service: InyectNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InyectNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

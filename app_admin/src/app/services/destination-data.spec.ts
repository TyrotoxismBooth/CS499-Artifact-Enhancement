import { TestBed } from '@angular/core/testing';

import { DestinationData } from './destination-data';

describe('DestinationData', () => {
  let service: DestinationData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

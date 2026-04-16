import { TestBed } from '@angular/core/testing';

import { ConsoleData } from './';

describe('ConsoleData', () => {
  let service: ConsoleData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

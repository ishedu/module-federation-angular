import { TestBed } from '@angular/core/testing';

import { AppServices } from './app-services.service';

describe('AppServices', () => {
  let service: AppServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AppSevicesService } from './app-sevices.service';

describe('AppSevicesService', () => {
  let service: AppSevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

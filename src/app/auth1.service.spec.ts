import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth1.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created isAuthenticate', () => {
    service.isAuthenticate();
    expect(service.isAuthenticate).toBeDefined();
  });
});

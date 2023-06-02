import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
class mockAuthService
{
  isAuthenticate()
  {
    return true
  }
}
describe('LoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:AuthService,useClass:mockAuthService}
      ]
    });
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

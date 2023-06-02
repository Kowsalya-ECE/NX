import { TestBed } from '@angular/core/testing';

import { AccessGuard } from './access.guard';
import { ActivatedRouteSnapshot, RouterEvent, RouterStateSnapshot } from '@angular/router';
function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}
const dummyRoute = {} as ActivatedRouteSnapshot;
const fakeUrls = ['/', '/navbar/signin', '/crisis-center', '/a/deep/route'];
describe('AccessGuard', () => {
  let guard: AccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
//   fakeUrls.forEach((fakeUrl) => {
//   it('grants child route access', () => {
//     const canActivateChild = guard.canActivateChild(dummyRoute, fakeRouterState(fakeUrl));

//     expect(canActivateChild).toBeTrue();
//   })
// })
});

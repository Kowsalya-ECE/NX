import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivateChild {
  routeArray = [{ id: 1, routename: '/navbar/day1' },
  { id: 2, routename: '/navbar/table' },
  { id: 2, routename: '/navbar/Employee-reg' },
  { id: 3, routename: '/navbar/examples' },
  { id: 4, routename: '/navbar/todo-list' },
  { id: 5, routename: '/navbar/snackbar' },
  { id: 6, routename: '/navbar/signin' }];
  constructor(private router: Router) {

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('request url : ', state.url);
    const index = this.routeArray.findIndex(x => x.routename === state.url)
    {
      if (index !== -1) {
        return true;
      }
      else {
        alert('you cant able to access this page');
        this.router.navigate(['/navbar/signin']);
        return false;
      }
    }
    return true;
  }

}

import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Observer, filter } from 'rxjs';
import { AuthService } from './auth.service';
import { EmployeeRegComponent } from '../core/components/employee-reg/employee-reg.component';
import { SnackbarService } from '../core/Service1/snackbar.service';
import { DialogueService } from '../core/dialogue.service';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardGuard implements CanDeactivate<unknown> {
  constructor(private dialogueService:DialogueService){

  }
  canDeactivate(
    component: EmployeeRegComponent,
    currentRoute?: ActivatedRouteSnapshot,
    currentState?: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if (!component.CanDeactivate()) {
      return new Observable((observer: Observer<boolean>) => {
        const dialogref = this.dialogueService.openDialogue('you have unsave changed.....are you sure to leave this page..?')
        dialogref.afterClosed().pipe(filter((result: boolean) => {
          return result;
        })).subscribe((Response: any) => {
          observer.next(true);
          observer.complete();
        });
      }); 
    }else{
      return true;
    }
   }

}

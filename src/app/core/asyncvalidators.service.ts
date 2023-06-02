import { Injectable } from '@angular/core';
import { EmplyService } from './emply.service';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncvalidatorsService {

  constructor() { }
  static asyncEmailValidation(EmplyService:EmplyService,id?:number): AsyncValidatorFn{
    return (control:AbstractControl): Promise<ValidationErrors|null>|Observable<ValidationErrors|null>=>{
     return timer(500).pipe(switchMap(() => {
      return EmplyService.getmail(control.value, id).pipe(map((res:any) => {
        return res && res['emailExist'] ? { emailExist: true} : null;
      }))
     }))
    }
  }
}

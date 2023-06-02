import { TestBed } from '@angular/core/testing';

import { DeactivateGuardGuard } from './deactivate-guard.guard';
import { DialogueService } from '../core/dialogue.service';
import { Observable } from 'rxjs';
// import { EmployeeRegComponent } from '../core/components/employee-reg/employee-reg.component';
import { CanDeactivate} from '@angular/router';
import { ComponentType } from '@angular/cdk/portal';
class mockDialogueService
{
  openDialogue()
  {
    return true
  }
}
class MockClass implements CanDeactivate<boolean>{
  returnValue:boolean | Observable<boolean> | undefined
  canDeactivate():boolean{
    if(value)
    {
      return false
    }
    else{
      return true
    }
  }
}
let value:boolean;
describe('DeactivateGuardGuard', () => {
  let guard: DeactivateGuardGuard;
  let mockClass:MockClass;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        DeactivateGuardGuard,
        {provide:DialogueService,useClass:mockDialogueService},
        MockClass
      ],
      
    });
    guard = TestBed.inject(DeactivateGuardGuard);
    mockClass=TestBed.inject(MockClass)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
//  it('should be canDeactivate',()=>{
//       value=true;
//   const canDeactivate$=<Observable<boolean>>(
//     guard.canDeactivate(mockClass)
//   );
//   // canDeactivate$.subscribe(())
//   expect(guard.canDeactivate).toBeDefined();
  
//  })
//  it('should be canDeactivate',()=>{
//   value=false;
// // const canDeactivate$=<Observable<boolean>>(
// guard.canDeactivate(mockClass)
// );
// canDeactivate$.subscribe(())
// expect(guard.canDeactivate).toBeDefined();

})

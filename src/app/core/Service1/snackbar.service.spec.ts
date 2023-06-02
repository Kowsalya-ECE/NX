import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
class mockMatSnackBar
{
  openFromComponent()
  {
    return true
  }
}
describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:MatSnackBar,useClass:mockMatSnackBar}
      ]
    });
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be Snackbar',()=>{
    service.Snackbar('','');
    expect(service.Snackbar).toBeDefined();
    })
});

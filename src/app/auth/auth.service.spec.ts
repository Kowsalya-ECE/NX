import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpserviceService } from '../core/httpservice.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http'
class mockRouter
{
  navigate()
  {
    return true
  }
}
class mockHttpserviceService
{
  getJson()
  {
    return of ({});
  }
}
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:Router,useClass:mockRouter},
        {provide:HttpserviceService,useClass:mockHttpserviceService}
      ],
      imports:[
        HttpClientModule,
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be getMessage',()=>{
    service.getMessage();
    expect(service.getMessage).toBeDefined();
  });
  // it('should be openDialog',()=>{
  //   service.openDialog('');
  //   expect(service.openDialog).toBeDefined();
  // });
  it('should be onlogout',()=>{
    service.onlogout();
    expect(service.onlogout).toBeDefined();
  });
});

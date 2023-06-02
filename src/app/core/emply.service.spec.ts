import { TestBed } from '@angular/core/testing';

import { EmplyService } from './emply.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpserviceService } from './httpservice.service';
class mockHttpserviceService
{
  getMethod()
  {
    return true
  }
  postMethod()
  {
    return true
  }

}
describe('EmplyService', () => {
  let service: EmplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:HttpserviceService,useClass:mockHttpserviceService}
      ],
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(EmplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('should be checkEmail', () => {
  //   service.checkEmail('',1);
  //   expect(service.checkEmail).toBeDefined();
  // });
  it('should be getposts', () => {
    service.getposts();
    expect(service.getposts).toBeDefined();
  });
  it('should be getDesignation', () => {
    service.getDesignation();
    expect(service.getDesignation).toBeDefined();
  });
  it('should be getRole', () => {
    service.getRole();
    expect(service.getRole).toBeDefined();
  });
  it('should be createemployee', () => {
    service.createemployee(Date);
    expect(service.createemployee).toBeDefined();
  });
  it('should be getEmployees', () => {
    service.getEmployees();
    expect(service.getEmployees).toBeDefined();
  });
  it('should be deleteEmployees', () => {
    service.deleteEmployees(Date);
    expect(service.deleteEmployees).toBeDefined();
  });
  it('should be getEmp', () => {
    service.getEmp(Date);
    expect(service.getEmp).toBeDefined();
  });
  it('should be getupdate', () => {
    service.getupdate(Date);
    expect(service.getupdate).toBeDefined();
  });
  it('should be getmail', () => {
    service.getmail('',1);
    expect(service.getmail).toBeDefined();
  });
});

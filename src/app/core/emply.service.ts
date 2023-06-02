import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class EmplyService {
  checkEmail(value: string, id: number | undefined) {
    throw new Error('Method not implemented.');
  }
  // httpservice: any;
  constructor(private http:HttpserviceService) { }

  getposts() {
    return this.http.getMethod('posts')
  }
  getDesignation()
  {
    return this.http.getMethod('getDesignation')
  }
  getRole()
  {
    return this.http.getMethod('getRole')
  }
  createemployee(data:any)
  {
    return this.http.postMethod('createEmployee',data);
  }
  getEmployees()
  {
    return this.http.getMethod('getEmployees');
  }
  deleteEmployees(data: any)
  {
    return this.http.postMethod('deleteEmployees',data);
  }
  getEmp(data:any)
  {
    return this.http.postMethod('getEmp',data);
  }
  getupdate(data:any)
  {
    return this.http.postMethod('getupdate',data);
  }
  getmail(Email:string,id:number|undefined)
  {
   const data={email:Email,id:id ? id:null};
   return this.http.postMethod('getemail',data);
  }
}

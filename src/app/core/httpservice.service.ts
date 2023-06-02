import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  APIurl = environment.APIurl;
  constructor(private httpservice: HttpClient) { }
  getMethod(url: string) {
    return this.httpservice.get(this.APIurl +'v1/'+ url);
  }
  postMethod(url: string, data: any) {
    return this.httpservice.post(this.APIurl+'v1/' + url, data)
  }
  getJson(url: string) {
    return this.httpservice.get('./assets/' + url);
  }
}

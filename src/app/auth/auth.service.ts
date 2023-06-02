import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../core/httpservice.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  openconformationDialog: any;
  openDialog(arg0: string) {
    throw new Error('Method not implemented.');
  }
  
  messages = new BehaviorSubject<any>(null);

  constructor(private router: Router,
    private http: HttpserviceService) {

  }
  getMessage() {
    this.http.getJson('message.json').subscribe(response => {
      console.log('res ;', response);
      this.messages.next(response);

    });
  }
  isAuthenticate() {
    let token;
    const currentUser = JSON.parse(String(sessionStorage.getItem('currentUserToken')));
    console.log("currentUser :", currentUser.token);

    if (currentUser && currentUser.token) {
      token = currentUser.token;
      return token != null;
    }
    // return true;
  }
  
  onlogout() {
    sessionStorage.removeItem('currentUserToken');
    this.router.navigate(['/navbar/signin']);
    return true;
  }
  

}

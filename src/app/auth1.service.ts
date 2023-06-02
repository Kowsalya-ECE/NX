import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpserviceService } from './core/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate() {
    // throw new Error('Method not implemented.');
  }
  // getMessage() {
  //   this.http.getJson('message.json').subscribe(response => {
  //     console.log('res ;', response);
  //     this.messages.next(response);
  //   });
  // }
}

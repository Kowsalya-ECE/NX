import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '../../Service1/snackbar.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinform!: FormGroup;
  messages!:Observable<any>;
  user = {
    Name: 'kowsalya',
    Email: 'kowsalya2361@gmail.com',
    password: '@2361'
  };
  token='JBCHDHYUHUI%$^NKVNDJ*876';

  stringValidationPattern!: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  // snackbarService: any;

  constructor(private router: Router,
    private snackbarService: SnackbarService,
    private authService:AuthService) { }

  ngOnInit() {
    // this.authService.messages.subscribe(Response=>this.messages=Response)
    this.messages=this.authService.messages;

    this.signinform = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),Validators.required]),
      password: new FormControl(null, Validators.required),


    })
  }
  signin() {
    if (this.signinform.valid) {
      if (this.signinform.value.Name === this.user.Name && this.signinform.value.Email === this.user.Email && this.signinform.value.password === this.user.password) {
        sessionStorage.setItem('currentUserToken',JSON.stringify({token:this.token}))
        
        this.router.navigate(['/navbar/day1']);
      }
      else {
        this.snackbarService.Snackbar('Enter valid MailId and password', 'error');
      }
    }

  }

}

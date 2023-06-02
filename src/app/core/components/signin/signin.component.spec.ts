import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { SnackbarService } from '../../Service1/snackbar.service';
import { AuthService } from 'src/app/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';
class mockSnackbarService {
  Snackbar() {
    return true;
  }
}
class mockAuthService {
  // messages() {
  //   return true;
  // }
}
class mockRouter
{
  navigate()
  {
    return true
  }
}
let value:boolean;
describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent,NavBarComponent],
      providers: [
        { provide: SnackbarService, useClass: mockSnackbarService },
        { provide: AuthService, useClass: mockAuthService },
        {provide:Router,useClass:mockRouter}
      ],
      imports: [RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be signin',()=>{
    component.signin();
    expect(component.signin).toBeDefined();
  });
  it('should be onsubmit',()=>{
    value=true;
    component.signinform.setValue({
      Name: 'kowsalya',
      Email: 'kowsalya2361@gmail.com',
      password: '@2361'
    });
    component.signin();
    expect(component.signin).toBeDefined();
  });
  
 it('should be onsubmit',()=>{
  value=false;
  component.signin();
  // expect(component.signin).toBeDefined();
 })
});

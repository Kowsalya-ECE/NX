import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegComponent } from './employee-reg.component';
import { SnackbarService } from '../../Service1/snackbar.service';
import { EmplyService } from '../../emply.service';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class MockSnackbarService {
  Snackbar() {
    return true;
  }
}
class MockEmplyService {
  getEmp() {
    return of({});
  }
  getDesignation() {
    return of({});
  }
  getRole() {
    return of({});
  }
  createemployee() {
    return of({});
  }
  getupdate() {
    return of({});
  }
}
class MockAuthService {
  messages = new BehaviorSubject<any>(null);
}
let isEdit: boolean;
describe('EmployeeRegComponent', () => {
  let component: EmployeeRegComponent;
  let fixture: ComponentFixture<EmployeeRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeRegComponent],
      providers: [
        { provide: SnackbarService, useClass: MockSnackbarService },
        { provide: EmplyService, useClass: MockEmplyService },
        { provide: AuthService, useClass: MockAuthService },
        {
          provide: ActivatedRoute, useValue: {
            params: of(isEdit ? { data: 'edit', id: '1' } : {})
          },

        }
      ],
      imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDividerModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        BrowserAnimationsModule,

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EmployeeRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be call onsubmit', () => {
    component.onsubmit();
    expect(component.onsubmit).toBeDefined();
  })
  it('should be call CanDeactivate', () => {
    component.CanDeactivate();
    expect(component.CanDeactivate).toBeDefined();
  })
  it('should be call onsubmit', () => {
    component.onsubmit();
    expect(component.onsubmit).toBeDefined();
  });
// it('should be onsubmit',()=>{
//   component.EmployeeregForm.setValue({
//     firstname:'',
//     lastname:'',
//     Email:'',
//     AlternateEmail:'',
//     Dateofbirth:'',
//     DateofJoining:'',
//     designationId:'',
//     roleId:'',
//     password:''
//   });
//   component.onsubmit();
//   expect(component.onsubmit).toBeDefined();
// })


  it('should be call removeItem', () => {
    component.removeItem(1);
    expect(component.removeItem).toBeDefined();
  });
  
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
// class MockRouter{
//   navigate()
//   {
//     return true;
//   }
// }
let routerSpy: jasmine.SpyObj<Router>;
describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
  routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
    await TestBed.configureTestingModule({
      
      declarations: [NavBarComponent],
      providers:[
        // { provide: Router, useClass: MockRouter },
      ],
      imports: [MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        FormsModule,
        MatListModule,
        RouterTestingModule.withRoutes([]),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be isclick',()=>{
    component.isclick();
    expect(component.isclick).toBeDefined();
  });
  // it('should be onlogout',()=>{
  //   component.onlogout();
  //   expect(routerSpy.navigate).toHaveBeenCalledWith(['/signin'],jasmine.any(Object))
  //       // expect(component.onlogout).toBeDefined();
  // })
});

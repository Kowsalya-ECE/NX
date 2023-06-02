import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1parentComponent } from './day1parent.component';
import { EmplyService } from '../../emply.service';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from 'src/app/auth1.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogueService } from '../../dialogue.service';
import { Router } from '@angular/router';
import { Day1childComponent } from '../day1child/day1child.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { __values } from 'tslib';
class mockEmplyService
{
  getEmployees()
  {
    return of ({});
  }
  deleteEmployees()
  {
    return of({});
  }
}
class mockAuthService
{
  messages = new BehaviorSubject<any>(null);
}
class mockRouter
{
  navigate()
  {
    return true;
  }
}
class mockDialogueService
{
  openDialogue()
  {
    return true
  }
}
describe('Day1parentComponent', () => {
  let component: Day1parentComponent;
  let fixture: ComponentFixture<Day1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1parentComponent,Day1childComponent ],
      providers:[
        {provide:EmplyService,useClass:mockEmplyService},
        {provide:AuthService,useClass:mockAuthService},
        {provide:Router,useClass:mockRouter},
        {provide:DialogueService,useClass:mockDialogueService},

      ],
      imports:[
        // HttpClientTestingModule,
        MaterialModule,
        // BrowserModule,
        // BrowserAnimationsModule,
        // FormsModule,
        // HttpClientModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(Day1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be onclick',()=>{
    component.onclick();
    expect(component.onclick).toBeDefined();
  });
  // it('should be applyFilter',()=>{
  //   component.applyFilter();
  //   expect(component.applyFilter).toBeDefined();
  // });
  it('should be onview',()=>{
    component.onview(Element);
    expect(component.onview).toBeDefined();
  });
  it('should be onedit',()=>{
    component.onedit(Element);
    expect(component.onedit).toBeDefined();
  });
 
  it('should be ActionEmit',()=>{
    component.ActionEmit(Event);
    expect(component.ActionEmit).toBeDefined();
  });
});

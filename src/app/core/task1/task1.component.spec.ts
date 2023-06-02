import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1Component } from './task1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('Task1Component', () => {
  let component: Task1Component;
  let fixture: ComponentFixture<Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task1Component ],
      imports:[
        MatFormFieldModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be onclickbtn',()=>{
    component.onclickbtn(1);
    expect(component.onclickbtn).toBeDefined();
  })
});

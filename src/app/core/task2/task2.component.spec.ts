import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2Component } from './task2.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Task2Component', () => {
  let component: Task2Component;
  let fixture: ComponentFixture<Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2Component ],
      imports:[
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      BrowserAnimationsModule
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

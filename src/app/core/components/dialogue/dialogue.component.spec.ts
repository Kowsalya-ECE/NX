import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueComponent } from './dialogue.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DialogueComponent', () => {
  let component: DialogueComponent;
  let fixture: ComponentFixture<DialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueComponent ],
      providers:[{provide:MAT_DIALOG_DATA,useValue:{}}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

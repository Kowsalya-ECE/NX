import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAY1Component } from './day1.component';

describe('DAY1Component', () => {
  let component: DAY1Component;
  let fixture: ComponentFixture<DAY1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAY1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAY1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsComponent } from './parents.component';

describe('ParentsComponent', () => {
  let component: ParentsComponent;
  let fixture: ComponentFixture<ParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[ParentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should call ngOnChanges',()=>{
    component.ngOnChanges('');
    expect(component.ngOnChanges).toBeDefined
  });
  // it('should call ngOnInit',()=>{
  //   component.ngOnInit();
  //   expect(component.ngOnInit).toBeDefined;
  // });
  // it('should be creted',()=>{
  //   component.interval;
  //   expect(component.interval).toBeDefined
  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

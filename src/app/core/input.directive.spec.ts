import { Component, Directive } from '@angular/core';
import { InputDirective } from './input.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
@Component({
  template:`<div class="container" fxLayoutAlign="center center">
  <span  class="span1" fxLayoutAlign="center center">₹</span>
  <input  appInput class="inputbox" type="text">
  <span  class="span2" fxLayoutAlign="center center">/Month</span>
</div>`
})
class TodoListComponent
{}

describe('InputDirective', () => {
  let component:TodoListComponent;
  let fixture:ComponentFixture<TodoListComponent>
  let element;
  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations:[InputDirective,TodoListComponent],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    element=fixture.debugElement.nativeElement.querySelectorAll('input')
    // fixture.detectChanges();
  });

  // it('should create an instance', () => {
  //   // const directive = new InputDirective();
  //   // expect(directive).toBeTruthy();
  // });
  it('should be ngAfterViewInit',()=>{
    // fixture.detectChanges();
    
  })
  
});

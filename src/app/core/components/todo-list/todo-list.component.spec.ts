import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should updatesearch',()=>{
   const value={target:{value:''}};
    component.updatesearch(value);
    expect(component.updatesearch).toBeDefined();

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

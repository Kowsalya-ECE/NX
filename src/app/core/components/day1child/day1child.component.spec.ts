import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1childComponent } from './day1child.component';
import { FormsModule } from '@angular/forms';
import { Day1parentComponent } from '../day1parent/day1parent.component';

describe('Day1childComponent', () => {
  let component: Day1childComponent;
  let fixture: ComponentFixture<Day1childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1childComponent,Day1parentComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day1childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be onActionEmit',()=>{
    component.onActionEmit(Event);
    expect(component.onActionEmit).toBeDefined();
  })
});

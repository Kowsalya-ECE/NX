import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsComponent } from './components/parents/parents.component';
import { ChildComponent } from './components/child/child.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from '../material/material.module';
import { Day1parentComponent } from './components/day1parent/day1parent.component';
import { Day1childComponent } from './components/day1child/day1child.component';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { EmployeeRegComponent } from './components/employee-reg/employee-reg.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HighlightPipesPipe } from './pipes/highlight.pipes.pipe';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { PipesPipe } from './pipes.pipe';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { TableComponent } from './components/table/table.component';
import { InputDirective } from './input.directive';

// import { SigninComponent } from './components/signin/signin.component';

// import { Task12Component } from 
// import { PracticeComponent } from '../practice/practice.component';


@NgModule({
  declarations: [
    ParentsComponent,
    ChildComponent,
    Day1parentComponent,
    Day1childComponent,
    Task1Component,
    Task2Component,
    EmployeeRegComponent,
    NavBarComponent,
    ExamplesComponent,
    TodoListComponent,
    HighlightPipesPipe,
    SnackbarComponent,
    PipesPipe,
    DialogueComponent,
    DynamicTableComponent,
    TableComponent,
    InputDirective,
    // SigninComponent
    //  PracticeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MaterialModule,
    FormsModule
    // PracticeComponent
  ],
  exports:[ParentsComponent,
    ChildComponent

  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1parentComponent } from './core/components/day1parent/day1parent.component';
import { Day1childComponent } from './core/components/day1child/day1child.component';
import { Task1Component } from './core/task1/task1.component';
import { Task2Component } from './core/task2/task2.component';
import { EmployeeRegComponent } from './core/components/employee-reg/employee-reg.component';
// import { NavbarComponent } from './navbar/nav-bar.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { ExamplesComponent } from './core/components/examples/examples.component';
import { TodoListComponent } from './core/components/todo-list/todo-list.component';

import { SigninComponent } from './core/components/signin/signin.component';
import { AuthGuard } from './auth/auth.guard';
import { AccessGuard } from './auth/access.guard';
import { DeactivateGuardGuard } from './auth/deactivate-guard.guard';
import { TableComponent } from './core/components/table/table.component';
import { SnackbarComponent } from './core/components/snackbar/snackbar.component';
// import { AccessGuard } from './auth/access.guard';

const routes: Routes = [
  // task1
  // {path:'',redirectTo:'task1',pathMatch:'full'},
  //  {path:'task1',component:Task1Component},
  //  {path:'task2',component:Task2Component}
  //  parent1
  // { path: '', redirectTo: 'navbar/day1', pathMatch: 'full' },
  // {
  //   path: 'navbar', component: NavBarComponent, children: [
  //     { path: 'table', component: Day1childComponent },
  //     { path: 'day1', component: Day1parentComponent },
  //     { path: 'Employee-reg', component: EmployeeRegComponent },
  //     { path: 'examples', component: ExamplesComponent },
  //     { path: 'todo-list', component: TodoListComponent },
  //     {path:'snackbar',component:SnackbarComponent},
  //     {path:'signin',component:SigninComponent}
  //   ]
  // }

 { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'signin', component: SigninComponent, children: [
    ]
  },
  {path:'navbar',component:NavBarComponent,canActivate:[AuthGuard],children:[
      { path: 'day1', component: Day1parentComponent },
      { path: 'table', component: Day1childComponent },
      // { path: 'table/:data/:id', component: Day1childComponent },
      { path: 'Employee-reg', component: EmployeeRegComponent,canDeactivate:[DeactivateGuardGuard]},
      { path: 'Employee-reg/:data/:id/:disable', component: EmployeeRegComponent},
      {path:'table2',component:TableComponent},
      { path: 'examples', component: ExamplesComponent },
      { path: 'todo-list', component: TodoListComponent },
      {path:'snackbar',component:SnackbarComponent},
      {path:'signin',component:SigninComponent}
  ]},
];
// path:'app',component:NavbarComponent,children:[
// path:'app',component:PracticeComponent,children:[
// {path:'practice',component:PracticeComponent}
// {path:'parents',component:ParentsComponent},
// {path:'child',component:ChildComponent},
// {path:'photo',component:PhotoComponent},
// {path:'resume',component:ResumeComponent},
// {path:'practice',component:PracticeComponent} 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

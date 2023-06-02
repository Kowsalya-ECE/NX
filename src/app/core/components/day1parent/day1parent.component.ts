// import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { interval, subscribeOn } from 'rxjs';
import { Day1childComponent } from '../day1child/day1child.component';
import { MatDialog } from '@angular/material/dialog';
import { EmplyService } from '../../emply.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogueService } from '../../dialogue.service';
// import { AppComponent } from 'src/app/app.component';
// import { ChildComponent } from '../child/child.component';
// import {MatButtonModule} from '@angular/material/button';
export interface PeriodicElement {
  name: string;
  position: number;
  dept: string;
  reg: number;
  result: string;

}

@Component({
  selector: 'app-day1parent',
  templateUrl: './day1parent.component.html',
  styleUrls: ['./day1parent.component.scss']
})
export class Day1parentComponent implements OnInit, AfterViewInit {
  // ngDoCheck() {
  //   console.log('ngDoCheck');   
  // }
  @ViewChild(Day1childComponent, { static: false }) viewChild!: Day1childComponent;
  @ViewChild('delete', { static: true })
  title = 'ANGULAR';
  imagesrc = '../assets/wuba.jpg';
  name = 'kowsalya';
  show = false;
  str = "";
//  variable=[
//   {headingRef:'id' ,heading:'id'},
//   {headingRef:'name' ,heading:'name'},
//   {headingRef:'mail' ,heading:'mail'},
//   {headingRef:'dept' ,heading:'dept'},
//   {headingRef:'Action' ,heading:'Action'}
//  ]

  ELEMENT_DATA: any;
  //  PeriodicElement[] = [
  //   { position: 1, name: 'kowsalya', dept: 'ECE', reg: 191041044, result: 'fail' },
  //   { position: 2, name: 'priya', dept: 'ECE', reg: 191041045, result: 'pass' },
  //   { position: 3, name: 'lekha', dept: 'CSE', reg: 191041046, result: 'fail' },
  //   { position: 4, name: 'Balu', dept: 'IT', reg: 191041047, result: 'pass' },
  //   { position: 5, name: 'kavi', dept: 'IT', reg: 191041048, result: 'fail' },
  //   { position: 6, name: 'balaji', dept: 'EEE', reg: 191041049, result: 'fail' },
  //   { position: 7, name: 'vishnavi', dept: 'AERO', reg: 191041050, result: 'pass' },
  //   { position: 8, name: 'gowthami', dept: 'AIDS', reg: 191041051, result: 'pass' },
  //   { position: 9, name: 'wuba', dept: 'ECE', reg: 191041044, result: 'fail' },
  //   { position: 10, name: 'kim', dept: 'ECE', reg: 191041045, result: 'pass' },
  //   { position: 11, name: 'jungkook', dept: 'CSE', reg: 191041046, result: 'pass' },
  //   { position: 12, name: 'jimin', dept: 'IT', reg: 191041047, result: 'pass' },
  //   { position: 13, name: 'suga', dept: 'IT', reg: 191041048, result: 'pass' },
  //   { position: 14, name: 'rm', dept: 'EEE', reg: 191041049, result: 'pass' },
  //   { position: 15, name: 'jhope', dept: 'AERO', reg: 191041050, result: 'pass' },
  //   { position: 16, name: 'jin', dept: 'AIDS', reg: 191041051, result: 'pass' }
  // ];
  // // displayedColumns: string[] = ['position', 'name', 'dept', 'reg', 'result', 'Action'];
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'Email','designationId', 'roleId', 'Action'];
  // ELEMENT_DATA!:any[];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @ViewChild('delete', { static: true }) delete!: TemplateRef<any>;


  //   interval:any= null;
  //  @Input() Name:any;
  Title = 'Student-Table';
  Description = 'result table';
  ActionArray =[{ label: 'pass student', value: 'pass' }, { label: 'fail student', value: 'fail' }];
  emplyservice: any;
  messages: any;

  constructor(
    private emplyService: EmplyService,
    private authService: AuthService,
    private router:Router,
    private dialogue:DialogueService) {

  }
  onclick(): void {
    console.log('onclick');
    this.show = !this.show;
  }
  ngOnInit() {
   
    this.authService.messages.subscribe(Response => {
      this.messages = Response
    })

    this.emplyService.getEmployees().subscribe((response: any) => {
      // this.employee=response.response;
      if (response) {
        // console.log('response', response);
        this.ELEMENT_DATA = response.response;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
    // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // setTimeout(() => {
    //   console.log(this.viewChild);
    //   this.viewChild.title='hgvcvc';
    // }, 3000);

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ActionEmit(event: any) {
    // console.log('ActionEmit', event);
  }
  onview(element:any)
  {
    this.router.navigate(['/navbar/Employee-reg','visibility',element.id,'disable']);
  }
  onedit(element:any)
  {
// console.log('edit-element :',element);
this.router.navigate(['/navbar/Employee-reg','edit',element.id,'enable']);

  }
  ondelete(element: any) {
    // console.log('del-element :', element);
    const dialogueRef=this.dialogue.openDialogue('Are you sure you want to delete..?')
    // const delet = this.openDialog.open(this.delete, {
    //   data: { name: element.firstname }
    // });

    dialogueRef.afterClosed().subscribe(subscribe => {
      if (subscribe) {
        const index = this.ELEMENT_DATA.findIndex((x: any) => x.id === element.id);
        if (index != -1) {
          this.emplyService.deleteEmployees({ id: element.id }).subscribe(response => {
            if (response) {
              // console.log('ondelete', response);
            }
          })
          this.ELEMENT_DATA.splice(index, 1);
          this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        }
      }
    })
  }
}

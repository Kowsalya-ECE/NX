import { Component, Injectable, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable,} from '@angular/material/table';
export interface PeriodicElement {
  id: string;
  firstname: string;
  Email: string;
  Dateofbirth: string;
  // Action:string;

}
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, OnChanges {
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  @Input() htmlref: any;//htmlref=variable;
  @Input() data!: Array<any>;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() icon!: any;
  @Input() details!: any;
  @Input() empdetail!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  element_data: any;
  // displayedColumns: string[] = [];
  message = 'add employee details';
  show1=false;
  // displayedColumns:string[]=['id','firstname','Email','Dateofbirth','Action','symbol'];
  displayedColumns!:string;
  ELEMENT_DATA: PeriodicElement[] =[{id:'',firstname:'',Email:'',Dateofbirth:''}]
  dataSource = [...this.ELEMENT_DATA];
  constructor() {

  }
  ngOnInit() {
    console.log('htmlref', this.htmlref);
    // this.displayedColumns = this.displayedColumns.concat(this.htmlref.map((x: any) => x.headingRef));
    // this.dataSource = new MatTableDataSource<any>(this.element_data);
    // this.dataSource.paginator=this.paginator;
    console.log('data', this.data);
  }
  ngOnChanges() {
    this.element_data = this.data;
    // this.dataSource = new MatTableDataSource<any>(this.element_data);
    console.log('data', this.data);
    // this.dataSource.paginator = this.paginator;
  }
  addEmpDetails() {
    const randomElementIndex = Math.floor(Math.random() * this.ELEMENT_DATA.length);
    this.dataSource.push(this.ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }
  }


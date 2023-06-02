import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { EmplyService } from '../../emply.service';
import { of } from 'rxjs';
import { DynamicTableComponent } from '../dynamic-table/dynamic-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class mockEmplyService
{
  getEmployees()
  {
    return of ({});
  }
}
describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent,DynamicTableComponent ],
      providers:[
        {provide:EmplyService,useClass:mockEmplyService}
      ],
      imports:[
        MatPaginatorModule,
        MatTableModule,
        MatIconModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

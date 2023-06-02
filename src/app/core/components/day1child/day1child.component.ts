import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, Input, OnInit, OnChanges,OnDestroy,DoCheck,AfterViewInit, ViewChild,AfterViewChecked,AfterContentInit,AfterContentChecked, Output, EventEmitter} from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Day1parentComponent } from '../day1parent/day1parent.component';

@Component({
  selector: 'app-day1child',
  templateUrl: './day1child.component.html',
  styleUrls: ['./day1child.component.scss']
})
export class Day1childComponent implements OnInit,OnChanges,OnDestroy ,DoCheck,AfterViewChecked,AfterContentInit,AfterContentChecked{
// @ViewChild(Day1parentComponent,{static:false})viewChild!:Day1parentComponent;
@Input() Title!:string;
@Input() Description!:string;
@Input() ActionArray!:any[];
@Output() ActionEmit=new EventEmitter<any>();


@Input() Name:any;
@Input() title:any;
interval:any= null;
onActionEmit(event:any)
{
  // console.log('onActionemit',event);
  this.ActionEmit.emit(event);
}
constructor()
{
  // console.log('constructor');
  
}
ngOnInit()
{
  // console.log('ngOnInit');
  // this.interval= setInterval(()=>{
  //  console.log('interval');
  //  },3000);
}
ngAfterViewInit()
{
  // console.log('ngafter-viewinit');
  // setTimeout(()=>{
    // this.viewChild.Title='angular';
//  },5000);
 
  }
  ngAfterContentInit()
  {
    // console.log('ng-after-content-init');
  }
  ngAfterContentChecked(): void
   {
    // console.log('ng-after-content-checked');
    }

ngOnChanges(changes:any)
{
  // console.log('onchanges:',changes);
  
}
ngDoCheck() 
{
  // console.log('ngDoCheck');   
}
ngAfterViewChecked()
{
  // console.log('ngafterviewchecked');
}
ngOnDestroy()
{
  // console.log('ngdestroy');
  // clearInterval(this.interval);
}
}




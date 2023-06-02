import { Component,Input } from '@angular/core';
// import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() Title:any;

}

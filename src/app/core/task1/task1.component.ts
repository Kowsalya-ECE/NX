import { Component } from '@angular/core';


@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component{
showPasswordOnPress: any;
slide=1;
// constructor(){
//   console.log('parent constructor');
//   setInterval(()=>{
//     this.slide<3? this.slide++ : this.slide=1;
//   },4000);
// }
onclickbtn(btn_num : number){
  this.slide=btn_num;
}
}




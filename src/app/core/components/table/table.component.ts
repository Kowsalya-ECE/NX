import { Component, OnInit } from '@angular/core';
import { EmplyService } from '../../emply.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  variable=[
    {headingRef:'id' ,heading:'id'},
    {headingRef:'firstname' ,heading:'firstname'},
    {headingRef:'Email' ,heading:'Email'},
    {headingRef:'Dateofbirth' ,heading:'Dateofbirth'},
    {headingRef:'Action' ,heading:'Action'},
    {headingRef:'symbol' ,heading:'symbol'},
   ]
   details="edit"
   
   data!:any[];
   icon=[
    {iconName:'visibility'},
    {iconName:'edit'},
    {iconName:'delete'}

   ]

   empdetail=[
    {headingRef:'id' ,heading:'id'},
    {headingRef:'firstname' ,heading:'firstname'},
    {headingRef:'Email' ,heading:'Email'},
    // {headingRef:'Dateofbirth' ,heading:'Dateofbirth'},
    {headingRef:'Action' ,heading:'Action'},
    {headingRef:'symbol' ,heading:'symbol'},
   ]

   constructor(private emplyService:EmplyService)
   {
     this.emplyService.getEmployees().subscribe((Response:any)=>{
       if(Response)
       {
        this.data=Response.response;
       }
     })
   }
   ngOnInit()
   {

   }

}

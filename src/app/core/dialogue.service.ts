import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from './components/dialogue/dialogue.component';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {
  constructor(private dialogue:MatDialog) { }
  openDialogue(msg:string)
  {
    const dialogRef=this.dialogue.open(DialogueComponent,{
      data:{
        header:'conformation',
        content:msg,
         Action:'symbol'
      },
      autoFocus:false,
      width:'400px'
    })
    return dialogRef;
  }

}

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../Service1/snackbar.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
  NAME = 'kowsalya.A';
  value = '5.7';
  today = new Date();
  money = '500';
  special=false;
  textStyle={
    'font-style':true?'normal':'italic',
    'font-weight':false?'normal':'bold',
    'font-size':false?'60px':'30px'
  };
  constructor(private snackbar: MatSnackBar,private snackbarservice:SnackbarService) 
  {
    
  }
  Snackbar() {
    // this.snackbar.open('succussfully saved', 'ok', {
    //   duration: 3000,
    //   panelClass: 'succuss-msg'
    // });
    // this.snackbarservice.Snackbar('saved successfully', 'default');
  }
}

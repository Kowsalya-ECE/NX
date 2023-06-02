import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  detail = [
    { type: 'success', icon: 'check', panelclass: 'snackbar-success' },
    { type: 'error', icon: 'error', panelclass: 'snackbar-error' },
    { type: 'warning', icon: 'warning', panelclass: 'snackbar-warning' },
    { type: 'information', icon: 'check', panelclass: 'snackbar-information'},
    { type: 'default', icon: 'check', panelclass: 'snackbar-default' }]

  constructor(private snackbar: MatSnackBar){

  }
  Snackbar(message: string, type: string) {
    let property = this.detail.find(x => x.type === type);
    console.log();
    
    this.snackbar.openFromComponent(SnackbarComponent,{
      data: {
        message: message,
        icon: property?.icon 
      },
      panelClass: property?.panelclass,
      duration: 3000
      // panelClass:'snackbar-error'
      
    })
  }
}

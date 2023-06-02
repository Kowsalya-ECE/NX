import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isActive!:boolean;
  constructor(private router:Router)
  {
    
  }
  isclick()
  {
    console.log('active',this.isActive); 
  }
  onlogout() {
    sessionStorage.removeItem('currentUserToken');
    this.router.navigate(['/signin']);
    // this.router.navigate(['/navbar/signin']);
    // console.log('active',this.isActive);
    
  } 
}

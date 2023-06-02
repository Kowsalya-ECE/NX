import { Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PracticeComponent } from './practice/practice.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SigninComponent } from './core/components/signin/signin.component';
// import { Demoservice } from './service/demo.service';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './core/token-interceptor.service';
import { SnackbarComponent } from './core/components/snackbar/snackbar.component';



@NgModule({
  declarations: [ AppComponent, PracticeComponent,SigninComponent],

  imports: [
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
   providers: [
      // {provide:HTTP_INTERCEPTORS,
      // useClass:TokenInterceptorService,
      // multi :true}
   ],
  bootstrap: [AppComponent],

})
export class AppModule { }

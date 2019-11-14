import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { apiService } from './services/api.service'
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { TokenInterceptor } from './services/token.interceptor';
import { JwtInterceptor } from './services/jwt.interceptor';
import { authService } from './services/auth.service';
import { HomeComponent } from './pages/home/home.component';
import { AngularButtonLoaderModule } from 'angular-button-loader';
import { NgxCaptchaModule } from 'ngx-captcha';
import { OwlModule } from 'ngx-owl-carousel';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    ComingSoonComponent,
    
  
  
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    LoadingBarModule,
    AngularButtonLoaderModule.forRoot(),
    NgxCaptchaModule,
    OwlModule
    
  ],
  providers: [apiService,
    authService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

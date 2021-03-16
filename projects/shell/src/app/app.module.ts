import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';

import { AuthLibModule } from '@demo/auth-lib';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AuthLibModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Mfe1Module } from './home/mfe1.module';
import { APP_ROUTES } from './app.routes';

import { AuthLibModule } from '@demo/auth-lib'; 
import { MessageBusModule } from '@demo/cross-cutting-concern';

// import { HttpClientModule } from '@angular/common/http'; 
// import { FrontendLibraryModule } from '@demo/frontend-library';

// HttpClientModule, 
// FrontendLibraryModule,

@NgModule({
  imports: [
    BrowserModule, 
    AuthLibModule, 
    RouterModule.forRoot(APP_ROUTES),
    MessageBusModule
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }

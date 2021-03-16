import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe1Component } from './mfe1.component';
import { RouterModule } from '@angular/router';
import { MFE1_ROUTES } from './mfe1.routes';
import { AuthLibModule } from '@demo/auth-lib';
import { MessageBusModule } from '@demo/cross-cutting-concern';
import { FormsModule } from '@angular/forms';

// import { FrontendLibraryModule } from '@demo/frontend-library';
// import { HttpClientModule } from '@angular/common/http'; 

//FrontendLibraryModule,
@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    AuthLibModule,
    RouterModule.forChild(MFE1_ROUTES),
    MessageBusModule
  ],
  declarations: [
    Mfe1Component
  ]
})
export class Mfe1Module { }

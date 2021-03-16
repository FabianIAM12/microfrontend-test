import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe2Component } from './mfe2.component';
import { RouterModule } from '@angular/router';
import { MFE1_ROUTES } from './mfe2.routes';
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
    Mfe2Component
  ]
})
export class Mfe2Module { }

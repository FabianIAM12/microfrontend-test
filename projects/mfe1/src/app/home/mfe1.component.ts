import {Component,  Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '@demo/auth-lib';

import { MessagingService } from '@demo/cross-cutting-concern';
//import {FrontendLibraryService, repos} from '@demo/frontend-library';
 
@Component({
  selector: 'mfe1',
  templateUrl: './mfe1.component.html'
})
export class Mfe1Component implements OnInit {

  requestMessage: string = "";
  userName = this.authService.userName;  
  loading: boolean = false;
  errorMessage; 

  // gitUserName ="microsoft";
  // repos: repos[];
  // private libService: FrontendLibraryService,
  // private authService: AuthService, 
  // @Inject(FrontendLibraryService) private libService,
  constructor(
    @Inject(MessagingService) private messagingService, 
    @Inject(AuthService) private authService, 
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr,
    @Inject(Router) private router) { }
  
    ngOnInit(): void {
      console.log('MFE1-message service ID: ' + this.messagingService.getId());
      console.log('MFE1-Auth service ID: ' + this.authService.getId());
  }
 
    sendReq() {
    this.router.navigate(['mfe2'], { queryParams: {messageText: this.requestMessage}}); 
    this.messagingService.setMessage(this.requestMessage);

  }

  public getRepos() {
    // this.loading = true;
    // this.errorMessage = "";
    // this.libService.getRepos(this.gitUserName)
    //   .subscribe(
    //     (response) => {                           //next() callback
    //       //console.log('response received')
    //       this.repos = response; 
    //     },
    //     (error) => {                              //error() callback
    //       //console.error('Request failed with error')
    //       this.errorMessage = error;
    //       this.loading = false;
    //     },
    //     () => {                                   //complete() callback
    //      // console.error('Request completed')    //This is not needed 
    //       this.loading = false; 
    //     })
  } 
}

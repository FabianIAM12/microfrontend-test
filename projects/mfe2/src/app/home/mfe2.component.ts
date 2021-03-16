import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrontendLibraryService } from '@demo/frontend-library';

interface Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
}

@Component({
  selector: 'mfe2',
  templateUrl: './mfe2.component.html'
})
export class Mfe2Component implements OnInit {
  loading = false;
  errorMessage;
  repos: Repos[] = [];
  gitUserName = 'microsoft';

  constructor(
    private libService: FrontendLibraryService,
    private route: ActivatedRoute,
  ) {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.getRepos();
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.messageText) {
        this.getRepos(params.messageText);
        this.gitUserName = params.messageText;
      }
    });
  }

  public getRepos(gitUserName: string = this.gitUserName) {
    this.loading = true;
    this.errorMessage = '';

    this.repos = [];
    this.libService.getRepos(gitUserName)
      .subscribe(
        (response) => {
          this.repos = response;
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          this.loading = false;
        });
  }
}

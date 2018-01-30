import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="width: 100%;">
      <div style="text-align: center;text-transform: uppercase;font-size:24px;">Angular lazy load</div>
      <nav style="text-align:center;padding-top:100px;">
        <div style="width:33%;float: left;">
          <a routerLink="page-one" routerLinkActive="active">Page one</a>
        </div>
        <div style="width:33%;float: left;">
          <a routerLink="page-two" routerLinkActive="active">Page two</a>
        </div>
        <div style="width:33%;float: left;">
          <a routerLink="page-three" routerLinkActive="active">Page three</a>
        </div>
      </nav>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}

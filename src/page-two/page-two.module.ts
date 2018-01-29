import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { PageTwoComponent } from './page-two.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: PageTwoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    PageTwoComponent
  ]
})
export class PageTwoModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { PageThreeComponent } from './page-three.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: PageThreeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    PageThreeComponent
  ]
})
export class PageThreeModule {}
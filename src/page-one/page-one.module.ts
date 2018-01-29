import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { PageOneComponent } from './page-one.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: PageOneComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    PageOneComponent
  ]
})
export class PageOneModule {}
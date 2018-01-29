import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// containers
import { AppComponent } from './app.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'page-one' },
  { path: 'page-one', loadChildren: '../page-one/page-one.module#PageOneModule' },
  { path: 'page-two', loadChildren: '../page-two/page-two.module#PageTwoModule' },
  { path: 'page-three', loadChildren: '../page-three/page-three.module#PageThreeModule' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

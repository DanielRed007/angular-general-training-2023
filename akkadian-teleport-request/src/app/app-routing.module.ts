// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutRoutingModule } from './components/layout/layout.routing.module';

const appRoutes: Routes = [

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LayoutRoutingModule
  ],
  providers: []
})
export class AppRoutingModule { }

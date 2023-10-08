import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestService } from './services/request.service';
import { PassportNumberPipe } from './pipes/passport-number.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PassportNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: RequestService, useClass: RequestService }, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkkadianHeaderComponent } from './akkadian-header/akkadian-header.component';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutRoutingModule } from './layout.routing.module';
import { RequestComponent } from './request/request.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AkkadianHeaderComponent,
    LayoutComponent,
    RequestComponent,
    HelpComponent,
    AboutComponent,
    HomeComponent
  ],
  exports: [
    AkkadianHeaderComponent,
    LayoutComponent,
    RequestComponent,
    HelpComponent,
    AboutComponent,
    HomeComponent
  ],
})
export class LayoutModule {}

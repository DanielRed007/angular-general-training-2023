import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkkadianHeaderComponent } from './akkadian-header/akkadian-header.component';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatGridListModule
  ],
  declarations: [
    AkkadianHeaderComponent, 
    LayoutComponent
  ],
  exports: [
    AkkadianHeaderComponent, 
    LayoutComponent
  ]
})
export class LayoutModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkkadianHeaderComponent } from './akkadian-header/akkadian-header.component';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule
  ],
  declarations: [AkkadianHeaderComponent, LayoutComponent],
  exports: [AkkadianHeaderComponent, LayoutComponent],
})
export class LayoutModule {}

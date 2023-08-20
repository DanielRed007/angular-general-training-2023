import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkkadianHeaderComponent } from './akkadian-header/akkadian-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AkkadianHeaderComponent],
  exports: [AkkadianHeaderComponent]
})
export class LayoutModule { }
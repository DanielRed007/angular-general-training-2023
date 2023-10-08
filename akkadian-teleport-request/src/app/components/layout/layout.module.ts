import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkkadianHeaderComponent } from './akkadian-header/akkadian-header.component';
import { RequestListComponent } from './request-list/request-list.component';
import { LayoutComponent } from './layout/layout.component';
import { FlightComponent } from './flight/flight.component';

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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgFor, NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

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
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule,
    NgFor,
    NgIf
  ],
  declarations: [
    AkkadianHeaderComponent,
    LayoutComponent,
    RequestComponent,
    RequestListComponent,
    HelpComponent,
    AboutComponent,
    HomeComponent,
    FlightComponent
  ],
  exports: [
    AkkadianHeaderComponent,
    LayoutComponent,
    RequestComponent,
    RequestListComponent,
    HelpComponent,
    AboutComponent,
    HomeComponent,
  ],
})
export class LayoutModule { }

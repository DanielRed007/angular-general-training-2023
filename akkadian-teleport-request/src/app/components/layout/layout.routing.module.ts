// dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RequestComponent } from './request/request.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const layoutRoutes: Routes = [
    { path: "", 
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "request", 
                component: RequestComponent
            },
            {
                path: "help", 
                component: HelpComponent
            },
            {
                path: "about", 
                component: AboutComponent
            }
        ] 
    }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

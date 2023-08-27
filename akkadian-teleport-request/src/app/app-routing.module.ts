// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: "", loadChildren: () => import("./components/layout/layout.module").then(m => m.LayoutModule)}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: []
})
export class AppRoutingModule { }

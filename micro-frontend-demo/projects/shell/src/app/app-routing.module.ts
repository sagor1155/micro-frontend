import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('products/DashboardModule').then(m => m.DashboardModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('products/CatalogModule').then(m => m.CatalogModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

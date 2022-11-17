import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('products/DashboardModule').then(m => m.DashboardModule)
  // },
  // {
  //   path: 'catalog',
  //   loadChildren: () => import('products/CatalogModule').then(m => m.CatalogModule)
  // },
  {
    path: 'dashboard',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3000/products.js',
      exposedModule: './DashboardModule'
    }).then(m => m.DashboardModule)
  },
  {
    path: 'catalog',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3000/products.js',
      exposedModule: './CatalogModule'
    }).then(m => m.CatalogModule)
  },
  {
    path: 'catalog-comp',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3000/products.js',
      exposedModule: './CatalogComponent'
    }).then(m => m.CatalogComponent)
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

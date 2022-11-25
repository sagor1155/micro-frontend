import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3000/products.js',
      exposedModule: 'DashboardModule'
    }).then(m => m.DashboardModule)
  },
  {
    path: 'catalog',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3000/products.js',
      exposedModule: 'CatalogModule'
    }).then(m => m.CatalogModule)
  },
  // {
  //   path: 'mfe2',
  //   component: WebComponentWrapper,
  //   data: {
  //     remoteEntry: 'http://localhost:3300/remoteEntry.js',
  //     remoteName: 'mfe2',
  //     exposedModule: './web-components',
  //     elementName: 'mfe2-element'
  //   } as WebComponentWrapperOptions
  // },
  {
    path: 'mfe2',
    component: WrapperComponent,
    data: {
      importName: 'mfe2',
      elementName: 'mfe2-element',
      load: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3300/remoteEntry.js',
        exposedModule: './web-components'
      })
    }
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

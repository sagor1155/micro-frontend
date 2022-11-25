import { bootstrap } from '@angular-architects/module-federation-tools';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // let the host app decide about prod mode
  // enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// bootstrap(AppModule, {
//   production: environment.production,
//   appType: 'microfrontend',
//   ngZoneSharing: false
// });


// declare const require: any;
// const ngVersion = require('../../../../micro-frontend-demo/package.json').dependencies['@angular/core'];
// (window as any).plattform = (window as any).plattform || {};
// let platform = (window as any).plattform[ngVersion];
// if (!platform) {
//   platform = platformBrowser();
//   (window as any).plattform[ngVersion] = platform;
// }
// platform.bootstrapModule(AppModule)
//   .catch((err: any) => console.error(err));

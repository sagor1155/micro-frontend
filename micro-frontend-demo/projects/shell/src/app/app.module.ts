import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MfeModule } from 'ngx-mfe';
import { UtilsModule } from 'projects/utils/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    WrapperComponent
  ],
  imports: [
    MfeModule.forRoot({
      mfeConfig: {
        "products": "http://localhost:3000/products.js",
        "mfe2": "http://localhost:3300/remoteEntry.js",
      },
    }),
    BrowserModule,
    AppRoutingModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

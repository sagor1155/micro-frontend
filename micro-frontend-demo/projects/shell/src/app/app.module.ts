import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MfeModule } from 'ngx-mfe';
import { UtilsModule } from 'projects/utils/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent
  ],
  imports: [
    MfeModule.forRoot({
      mfeConfig: {
        "products": "http://localhost:3000/products.js",
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

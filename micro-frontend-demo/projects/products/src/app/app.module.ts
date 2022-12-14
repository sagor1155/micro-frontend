import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MfeModule } from 'ngx-mfe';
import { UtilsModule } from 'projects/utils/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MfeModule,
    CatalogModule,
    DashboardModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

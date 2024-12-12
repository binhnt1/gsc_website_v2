import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppConfig } from './helpers/app.config';
import { ApiService } from './services/api.service';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

AppConfig.setEnvironment();
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    LayoutModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
export let AppInjector: Injector;

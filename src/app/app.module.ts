import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppMatModule } from './modules/mat-module/app-mat.module';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LogoutComponent } from './shared/components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PortalModule,
    OverlayModule,
    AppMatModule,
    AppRoutes
  ],
  entryComponents: [
    LoaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

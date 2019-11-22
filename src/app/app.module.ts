import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMatModule } from './modules/shared/mat-module/app-mat.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

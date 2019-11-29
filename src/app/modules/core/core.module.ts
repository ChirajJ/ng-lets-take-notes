import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core/core.component';
import { ApiService } from './api.service';
import { NotebooksModule } from './notebooks/notebooks.module';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NotebooksModule
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule { }

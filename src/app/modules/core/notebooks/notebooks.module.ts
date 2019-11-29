import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotebooksRoutingModule } from './notebooks-routing.module';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { NotebookMatModule } from '../../mat-module/notebooks-module';

@NgModule({
  declarations: [NotebooksComponent],
  imports: [
    CommonModule,
    NotebookMatModule,
    NotebooksRoutingModule
  ]
})
export class NotebooksModule { }

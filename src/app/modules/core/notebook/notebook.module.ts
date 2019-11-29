import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotebookRoutingModule } from './notebook-routing.module';
import { NotebookComponent } from './notebook/notebook.component';

@NgModule({
  declarations: [
    NotebookComponent
  ],
  imports: [
    CommonModule,
    NotebookRoutingModule
  ]
})
export class NotebookModule { }

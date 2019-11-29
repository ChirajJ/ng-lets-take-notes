import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core/core.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'notebooks',
        loadChildren: () => import('./notebooks/notebooks.module').then(mod => mod.NotebooksModule)
      },
      {
        path: 'notebook',
        loadChildren: () => import('./notebook/notebook.module').then(mod => mod.NotebookModule)
      },
      {
        path: '',
        redirectTo: 'notebooks'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

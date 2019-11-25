import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/notebooks'
    },
    {
        path: 'notebooks',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('./modules/core/notebooks/notebooks.module').then(mod => mod.NotebooksModule),
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes {}

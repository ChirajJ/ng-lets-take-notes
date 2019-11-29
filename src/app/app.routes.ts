import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FourOFourComponent } from './shared/components/error/four-o-four/four-o-four.component';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/ltn-app'
    },
    {
        path: 'ltn-app',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('./modules/core/core.module').then(mod => mod.CoreModule),
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: '**',
        component: FourOFourComponent
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

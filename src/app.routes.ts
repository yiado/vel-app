import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { Page404Component } from './app/shared/page404/page404.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: Page404Component }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );

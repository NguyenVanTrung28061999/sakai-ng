import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/views/dashboard/dashboard';
import { Documentation } from './app/views/documentation/documentation';
import { Landing } from './app/views/landing/landing';
import { Notfound } from './app/views/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./app/views/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/views/pages.routes') },
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/views/auth/authen.routes') },
    { path: '**', redirectTo: '/notfound' }
];

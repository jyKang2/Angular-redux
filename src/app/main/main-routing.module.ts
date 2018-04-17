import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const mainRoutes: Routes =  [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'hero', loadChildren: 'app/main/hero/hero.module#HeroModule' },
            { path: 'dashboard', component: DashboardComponent },
            { path: '**', redirectTo: 'hero' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {}
import { HeroListComponent } from './hero-list/hero-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './detail/hero-detail.component';

const heroRoutes: Routes =  [
    {
        path: '',
        component: HeroComponent,
        children: [
            { path: 'list', component: HeroListComponent },
            { path: 'detail/:id', component: HeroDetailComponent },
            { path: '**', redirectTo: 'list' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroRoutingModule {}
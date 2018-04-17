import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './detail/hero-detail.component';

const heroRoutes: Routes =  [
    {
        path: '',
        component: HeroComponent,
        children: [
            { path: 'detail/:id', component: HeroDetailComponent },
            { path: '**', redirectTo: '' }
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
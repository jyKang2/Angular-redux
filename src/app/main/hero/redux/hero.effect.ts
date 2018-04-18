import { Converter } from './../../../../@angular-redux/core/helper/converter';
import { HeroService } from './../../../../@angular-redux/core/api/hero.service';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';

import { Hero } from '../../../../@angular-redux/core/model/hero';

import * as HeroActions from "./hero.action";
import * as RouterActions from '../../../../@angular-redux/core/router/router.action';




@Injectable()
export class HeroEffect {


    constructor(
        private actions$: Actions, 
        private heroService: HeroService, 
        private router: Router) {}


    @Effect() HeroGetList$ = this.actions$
        .ofType(HeroActions.HERO_GET_LIST)
        .switchMap((action: HeroActions.HeroGetList) => {
            return this.heroService.getHeroes()
                .map((res: any) => {
                    const list: Array<Hero> = Converter.jsonToInstance(Hero, res);
                    return new HeroActions.HeroGetListSuccess(list);
                });
        });
    
    @Effect() HeroGetDetail$ = this.actions$
        .ofType(HeroActions.HERO_GET_DETAIL)
        .switchMap((action: HeroActions.HeroGetDetail) => {
            return this.heroService.getHero(action.id)
                .map((res: any) => {
                    const hero: Hero = Converter.jsonToInstance(Hero, res);
                    return new HeroActions.HeroGetDetailSuccess(hero);
                });
        });

    @Effect() HeroAdd$ = this.actions$
        .ofType(HeroActions.HERO_ADD)
        .switchMap((action: HeroActions.HeroAdd) => {
            return this.heroService.addHero(action.hero)
                .map((res: any) => {
                    return new RouterActions.Go({path: ['/main/hero/list']});
                });
        });

    

}
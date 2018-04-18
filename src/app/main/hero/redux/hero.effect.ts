import { Converter } from './../../../../@angular-redux/core/helper/converter';
import { HeroService } from './../../../../@angular-redux/core/api/hero.service';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';

import * as HeroActions from "./hero.action";
import { Hero } from '../../../../@angular-redux/core/model/hero';


@Injectable()
export class HeroEffect {


    // effect에서 
    @Effect() HeroGetList$ = this.actions$
        .ofType(HeroActions.HERO_GET_LIST)
        .switchMap((action: HeroActions.HeroGetList) => {
            return this.heroService.getHeroes()
                .map((res: any) => {
                    const list: Array<Hero> = Converter.jsonToInstance(Hero, res);
                    return new HeroActions.HeroGetListSuccess(list);
                });
        });

    constructor(private actions$: Actions, private heroService: HeroService, private router: Router) {}
}
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';

import * as HeroActions from "./hero.action";


@Injectable()
export class HeroEffect {

    @Effect() HeroGetList$ = this.actions$
        .ofType(HeroActions.HERO_GET_LIST)
        .switchMap((action: HeroActions.HeroGetList) => {
            return {
                type: 'NO_ACTION'
            };
        });
}
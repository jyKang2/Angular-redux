import { RouterReducerState } from '@ngrx/router-store';
import { IRouterStateUrl } from './../@angular-redux/core/router/router.state';
import { IHeroState } from './main/hero/redux/hero.state';


export interface AppStore {
    router: RouterReducerState<IRouterStateUrl>;
    hero: IHeroState;
}

import { IHeroState, HeroState } from './hero.state';
import * as HeroAction from './hero.action';

export type Action = HeroAction.All;
export const initState: HeroState = HeroState() as IHeroState;

export function heroReducer(state: IHeroState = initState, action: Action) {
    switch(action.type) {
        case HeroAction.HERO_GET_LIST_SUCCESS:
            return state.merge({
                list: action.list
            });
        case HeroAction.HERO_GET_DETAIL_SUCCESS:
            return state.merge({
                selectedHero: (action as HeroGetDetailSuccess).notice
            });
        default: 
            return state;
    }
}

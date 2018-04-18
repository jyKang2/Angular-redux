import { IHeroState, HeroState } from './hero.state';
import * as HeroAction from './hero.action';
import { HeroGetDetailSuccess } from './hero.action';

export type Action = HeroAction.All;
export const initState: IHeroState = HeroState() as IHeroState; // 문제가 자주 발생하는 부분 -> JS자체에 내장된 Map으로 인식되면 오류가 생김.

export function heroReducer(state: IHeroState = initState, action: Action) {
    switch(action.type) {
        case HeroAction.HERO_GET_LIST_SUCCESS:
            return state.merge({
                list: action.list
            });
        case HeroAction.HERO_GET_DETAIL_SUCCESS:
            return state.merge({
                selectedHero: (action as HeroGetDetailSuccess).hero
            });
        default: 
            return state;
    }
}

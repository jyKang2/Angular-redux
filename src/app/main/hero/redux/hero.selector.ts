import { IHeroState } from './hero.state';
import { AppStore } from './../../../app-store.interface';
import { createSelector } from '@ngrx/store';

export const baseHero = (state: AppStore) => state.hero;
export const getHeroList = createSelector(baseHero, (state: IHeroState) => {
    return state.list;
});

export const getSelectedHero = createSelector(baseHero, (state: IHeroState) => {
    return state.selectedHero;
});


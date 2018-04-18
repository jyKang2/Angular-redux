import { Hero } from './../../../../@angular-redux/core/model/hero';
import { List, Map, Record } from 'immutable';

export interface IHeroState extends Map<string, any> {
    list: List<Hero>;
    selectedHero: Hero;
}

export const HeroState = Record({
    list: null,
    selectedHero: null
});
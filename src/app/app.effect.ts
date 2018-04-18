import { RouterEffect } from './../@angular-redux/core/router/router.effect';
import { HeroEffect } from './main/hero/redux/hero.effect';

export const appEffects = [
    RouterEffect,
    HeroEffect
];

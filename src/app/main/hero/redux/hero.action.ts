import { Hero } from './../../../../@angular-redux/core/model/hero';
import { Action } from "@ngrx/store";

export const HERO_GET_LIST = "HERO_GET_LIST";
export class HeroGetList implements Action {
    readonly type = HERO_GET_LIST;
    constructor() {}
}

export const HERO_GET_LIST_SUCCESS = "HERO_GET_LIST_SUCCESS";
export class HeroGetListSuccess implements Action {
    readonly type = HERO_GET_LIST_SUCCESS;
    constructor(public list: Hero[]) {}
}

export const HERO_GET_DETAIL = "HERO_GET_DETAIL";
export class HeroGetDetail implements Action {
    readonly type = HERO_GET_DETAIL;
    constructor(public id: number) {}
}

export const HERO_GET_DETAIL_SUCCESS = "HERO_GET_DETAIL_SUCCESS";
export class HeroGetDetailSuccess implements Action {
    readonly type = HERO_GET_DETAIL_SUCCESS;
    constructor(public hero: Hero) {}
}

export const HERO_ADD = "HERO_ADD";
export class HeroAdd implements Action {
    readonly type = HERO_ADD;
    constructor(public hero: Hero) {}
}

export const HERO_UPDATE = "HERO_UPDATE";
export class HeroUpdate implements Action {
    readonly type = HERO_UPDATE;
    constructor(public hero: Hero) {}
}

export const HERO_DELETE = "HERO_DELETE";
export class HeroDelete implements Action {
    readonly type = HERO_DELETE;
    constructor(public id: Hero) {}
}


export type All = 
    HeroGetList |
    HeroGetListSuccess |
    HeroGetDetail |
    HeroGetDetailSuccess |
    HeroAdd |
    HeroUpdate |
    HeroDelete;
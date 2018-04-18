import { routerReducer } from '@ngrx/router-store';
import { heroReducer } from "./main/hero/redux/hero.reducer";

export const reducers = {
    router: routerReducer,
    hero: heroReducer
};
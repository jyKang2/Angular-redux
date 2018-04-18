import { CoreModule } from './../@angular-redux/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { SharedModule } from '../@angular-redux/shared/shared.module';

import { appEffects } from './app.effect';
import { reducers } from './app.reducer';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 5}),
    EffectsModule.forRoot(appEffects),
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

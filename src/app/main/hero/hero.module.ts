import { HeroSearchComponent } from './search/hero-search.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroRoutingModule } from './hero-routing.module';
import { SharedModule } from './../../../@angular-redux/shared/shared.module';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';

@NgModule({
  imports: [
    HeroRoutingModule,
    SharedModule
  ],
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ]
})
export class HeroModule {
}

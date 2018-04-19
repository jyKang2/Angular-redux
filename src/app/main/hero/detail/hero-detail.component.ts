import { HeroService } from './../../../../@angular-redux/core/api/hero.service';
import { getSelectedHero } from './../redux/hero.selector';
import { Store } from '@ngrx/store';
import { AppStore } from './../../../app-store.interface';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as HeroActions from '../redux/hero.action';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  private hero$: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppStore>,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  public getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe( hero => this.hero$ = hero);
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    this.heroService.updateHero(this.hero$)
      .subscribe(() => this.goBack());
  }

}

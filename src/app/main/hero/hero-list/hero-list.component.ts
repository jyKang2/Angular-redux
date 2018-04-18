import { getHeroList } from './../redux/hero.selector';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../app-store.interface';
import { ActivatedRoute } from '@angular/router';
import * as HeroActions from '../redux/hero.action';
import { Hero } from '../../../../@angular-redux/core/model/hero';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, OnDestroy {

  private hero$: any;

  constructor(private store: Store<AppStore>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(new HeroActions.HeroGetList());
    this.hero$ = this.store.select( getHeroList );
    this.hero$.subscribe(hero => {
      this.hero$ = hero;
    });
  }

  ngOnDestroy(): void {
    
  }

  public getHeroes(): void {
    
  }

  public add(name: string): void {
    this.store.dispatch(new HeroActions.HeroAdd({name} as Hero));
  }

  public addEnter(name: string): void {
    this.add(name);
  }

  public delete(): void {

  }

}

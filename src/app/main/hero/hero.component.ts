import { map } from 'rxjs/operators';
import { getHeroList } from './redux/hero.selector';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app-store.interface';
import * as HeroActions from './redux/hero.action';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {  

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

  }

  public addEnter(name: string): void {
    this.add(name);
  }

  public delete(): void {

  }

}

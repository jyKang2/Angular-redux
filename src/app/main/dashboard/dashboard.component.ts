import { ActivatedRoute } from '@angular/router';
import { AppStore } from './../../app-store.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HeroActions from '../hero/redux/hero.action';
import { getHeroList } from '../hero/redux/hero.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private hero$: any;

  constructor(private store: Store<AppStore>, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getHeroList();
  }

  /**
   * store에 이미 heroList가 있는 경우에는 dispatch하지 않음.
   */
  public getHeroList(): void {
    const state = this.store.select(getHeroList);
    state.subscribe(hero => {
      if(hero) {
        this.hero$ = hero.slice(1,5);
      } else {
        this.store.dispatch(new HeroActions.HeroGetList());
      }
    });
  }

}
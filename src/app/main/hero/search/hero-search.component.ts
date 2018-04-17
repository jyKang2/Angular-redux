import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap, distinct
} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  // public heroes$: Observable<Hero[]>;
  // private searchTerms = new Subject<string>();

  // constructor(private heroService: HeroService) { }

  // public search(term: string): void {
  //   this.searchTerms.next(term);
  // }

  // ngOnInit(): void {
  //   this.heroes$ = this.searchTerms.pipe(
  //     debounceTime(300),

  //     distinctUntilChanged(),

  //     switchMap((term: string) => this.heroService.searchHeroes(term))
  //   );
  // }

}

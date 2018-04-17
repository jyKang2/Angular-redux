import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  ngOnInit(): void {}

  // @Input() hero: Hero;

  // constructor(
  //   private route: ActivatedRoute,
  //   private heroService: HeroService,
  //   private location: Location
  // ) { }

  // ngOnInit() {
  //   this.getHero();
  // }

  // public getHero(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero)
  // }

  // public goBack(): void {
  //   this.location.back();
  // }

  // public save(): void {
  //   this.heroService.updateHero(this.hero)
  //     .subscribe(() => this.goBack());
  // }

}

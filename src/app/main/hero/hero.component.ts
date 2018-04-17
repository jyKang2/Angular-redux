import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {  

  constructor() { }

  ngOnInit() {
    this.getHeroes();
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

import { Store } from '@ngrx/store';
import { AppStore } from './../app-store.interface';
import { Component } from '@angular/core';
import * as RouterActions from '../../@angular-redux/core/router/router.action';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  private title = 'HeroTutorial';

  constructor(private store: Store<AppStore>) {}

  public goToPage(str: string){
    switch(str){
      case 'hero':
        this.store.dispatch(new RouterActions.Go({path: ['/main']}));
        break;
      case 'dashboard':
        this.store.dispatch(new RouterActions.Go({path: ['/main/dashboard']}));
        break;
      default:
        break;
    }
  }

}

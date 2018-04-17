import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@NgModule({
    imports: [
      HttpClientModule
    ],
    exports: [

    ],
    declarations: [],
    entryComponents: [],
    providers: [

    ]
  })
  export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) { }
  }
  
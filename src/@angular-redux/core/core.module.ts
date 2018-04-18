// import { SessionService } from './service/session.service';
// import { SpinnerModule } from './module/spinner.module';
import { ApiModule } from './api/api.module';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';


@NgModule({
    imports: [
      HttpClientModule,
      ApiModule,
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      ),
      // SpinnerModule
    ],
    exports: [
      // SpinnerModule
    ],
    declarations: [],
    entryComponents: [],
    providers: [
      // SessionService
    ]
  })
  export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) { }
  }
  
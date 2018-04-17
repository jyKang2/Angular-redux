import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { SharedModule } from '../../@angular-redux/shared/shared.module';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    DashboardComponent,
    MessageComponent
  ]
})
export class MainModule {
}

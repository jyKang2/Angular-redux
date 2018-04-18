// import { PipeModule } from './pipe/pipe.module';
import { ComponentModule } from './component/component.module';
// import { MaterialModule } from './material/material.module';
// import { DirectiveModule } from './directive/directive.module';
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';

import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    // DirectiveModule,
    // MaterialModule,
    ComponentModule,
    // PipeModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    // DirectiveModule,
    // MaterialModule,
    ComponentModule,
    // PipeModule
  ],
  providers: [],
  declarations: []
})
export class SharedModule { }

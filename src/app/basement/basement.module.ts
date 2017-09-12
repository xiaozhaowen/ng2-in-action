import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasementRoutingModule} from './basement-routing.module';
import {DatabindingComponent} from './databinding/databinding.component';
import {FatherComponent} from './communicate/father.component';
import {BasementComponent} from './basement.component';
import {LoginComponent} from './http/login.component';
import {HttpModule} from '@angular/http';
import { CmComponent } from './context-menu/cm.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import {OfficeDemoComponent} from './context-menu/office-demo.component';


@NgModule({
  imports: [
    CommonModule,
    BasementRoutingModule,
    ContextMenuModule,
    HttpModule
  ],
  declarations: [
    BasementComponent,
    DatabindingComponent,
    FatherComponent,
    LoginComponent,
    CmComponent,
    OfficeDemoComponent
  ]
})
export class BasementModule {
}

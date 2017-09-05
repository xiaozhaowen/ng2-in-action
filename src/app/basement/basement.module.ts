import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasementRoutingModule} from './basement-routing.module';
import {DatabindingComponent} from './databinding/databinding.component';
import {FatherComponent} from './communicate/father.component';
import {BasementComponent} from './basement.component';
import {LoginComponent} from './http/login.component';
import {HttpModule} from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    BasementRoutingModule,
    HttpModule
  ],
  declarations: [
    BasementComponent,
    DatabindingComponent,
    FatherComponent,
    LoginComponent
  ]
})
export class BasementModule {
}

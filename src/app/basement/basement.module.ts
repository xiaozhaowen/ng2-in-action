import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasementRoutingModule} from './basement-routing.module';
import {DatabindingComponent} from './databinding/databinding.component';
import {FatherComponent} from './communicate/father.component';
import {BasementComponent} from './basement.component';

@NgModule({
  imports: [
    CommonModule,
    BasementRoutingModule
  ],
  declarations: [
    BasementComponent,
    DatabindingComponent,
    FatherComponent
  ]
})
export class BasementModule {
}

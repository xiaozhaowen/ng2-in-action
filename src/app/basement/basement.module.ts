import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasementRoutingModule } from './basement-routing.module';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  imports: [
    CommonModule,
    BasementRoutingModule
  ],
  declarations: [DatabindingComponent]
})
export class BasementModule { }

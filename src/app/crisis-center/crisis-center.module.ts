import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CrisisService} from './crisis.service';

import {CrisisListComponent} from './crisis-list.component';
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import {CrisisCenterRoutingModule} from './crisis-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisListComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  providers: [
    CrisisService
  ]
})
export class CrisisCenterModule {
}

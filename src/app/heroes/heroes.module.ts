import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HeroListComponent} from './components/hero-list.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroService} from './services/hero.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule {
}

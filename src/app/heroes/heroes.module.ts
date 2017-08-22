import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './components/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeroListComponent, HeroDetailComponent],
  exports: [
    HeroListComponent
  ]
})
export class HeroesModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroListComponent} from './components/hero-list.component';
import {HeroDetailComponent} from './components/hero-detail.component';

const heroRoutes: Routes = [
  {path: 'heroes', component: HeroListComponent},
  {path: 'hero/:id', component: HeroDetailComponent}
];

/**
 * 子模块的路由需要使用forChild方法
 */
@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes)
  ],
  exports: [// TODO 为何还导出，根模块已经导出一次了？？？
    RouterModule
  ]
})
export class HeroesRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HeroListComponent} from './components/hero-list.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroService} from './services/hero.service';

/**
 * 这是一个子模块，同样也是一个类，然后需要添加注解来告诉angular
 */
@NgModule({
  // TODO 子模块应该是只能引入CommonModule,待确定
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  // 属于本模块的所有视图相关的组件，指令，管道
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  // TODO 此处注册的服务是不是会成为全局级别的服务，待确定
  providers: [
    HeroService
  ]
})
export class HeroesModule {
}

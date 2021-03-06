import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroesModule} from './heroes/heroes.module';
import {PageNotFoundComponent} from './page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {BasementModule} from './basement/basement.module';
import {DataFactoryModule} from './data-factory/data-factory.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {DialogService} from './dialog.service';
import { CoreModule } from './core/core.module';
import {PngDemoModule} from './png-demo/png-demo.module';
import { UiModule } from './ui/ui.module';


/**
 * 模块是一个类，但是需要使用注解来告诉angular这是一个module
 */
@NgModule({
  /*属于这个模块的所有view class，总共有3种：组件，指令，管道*/
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  // 引入其他模块暴露出来的东西
  // 注意此处的引入顺序，业务模块一定要在AppRoutingModule之前引入 ！！！！
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    BasementModule,
    DataFactoryModule,
    CrisisCenterModule,
    PngDemoModule,
    CoreModule,
    UiModule,
    AppRoutingModule
  ],
  // 本模块服务的创建者，放到此处之后全应用都可以访问
  providers: [
    DialogService
  ],
  // 只有根模块才可以配置此属性，用于启动app
  bootstrap: [AppComponent]
})
export class AppModule {
}

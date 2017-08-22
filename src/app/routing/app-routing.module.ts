import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from '../page-not-found.component';


/**
 *  配置路由：
 *  其中空字符为默认配置，跳转至指定路由，需要同时使用redirectTo和pathMatch
 *  双星号为所有不合法的路由配置，显示404
 */
const appRoutes: Routes = [
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}



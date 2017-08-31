import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisDetailResolver} from './crisis-detail-resolver.service';

/**
 * 子路由的配置说明
 * 自路由的子组件只会在本模块的根组件的outlet中导航，而不会在appComponent中进行导航
 */
const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            resolve: {
              crisis: CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [CrisisDetailResolver]
})
export class CrisisCenterRoutingModule {

}

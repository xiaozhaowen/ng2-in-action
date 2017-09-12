import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DatabindingComponent} from './databinding/databinding.component';
import {FatherComponent} from './communicate/father.component';
import {BasementComponent} from './basement.component';
import {LoginComponent} from './http/login.component';
import {CmComponent} from './context-menu/cm.component';
import {OfficeDemoComponent} from './context-menu/office-demo.component';

const routes: Routes = [
  {
    path: 'basement',
    component: BasementComponent,
    children: [
      {
        path: 'dataBinding',
        component: DatabindingComponent
      },
      {
        path: 'communication',
        component: FatherComponent
      },
      {
        path: 'http',
        component: LoginComponent
      },
      {
        path: 'ctxmenu',
        component: CmComponent
      },
      {
        path: 'office-ctx',
        component: OfficeDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasementRoutingModule {
}

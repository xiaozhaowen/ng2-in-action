import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PngDemoComponent} from './png-demo.component';
import {BtnDemoComponent} from './buttons/btn-demo/btn-demo.component';
import {PngContextMenuComponent} from './png-context-menu/png-context-menu.component';

const routes: Routes = [
  {
    path: 'png',
    component: PngDemoComponent,
    children: [
      {
        path: 'buttons',
        component: BtnDemoComponent
      },
      {
        path: 'context-menu',
        component: PngContextMenuComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PngDemoRoutingModule {
}

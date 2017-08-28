import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DatabindingComponent} from './databinding/databinding.component';

const routes: Routes = [
  {path: 'bmbinding', component: DatabindingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasementRoutingModule {
}

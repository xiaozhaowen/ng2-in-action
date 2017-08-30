import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DatabindingComponent} from './databinding/databinding.component';
import {FatherComponent} from './communicate/father.component';
import {BasementComponent} from './basement.component';

const routes: Routes = [
  {path: 'basement', component: BasementComponent},
  {path: 'bmbinding', component: DatabindingComponent, outlet: 'baseOutlet'},
  {path: 'communication', component: FatherComponent, outlet: 'baseOutlet'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasementRoutingModule {
}

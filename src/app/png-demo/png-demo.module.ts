import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PngDemoRoutingModule } from './png-demo-routing.module';
import { PngDemoComponent } from './png-demo.component';
import { BtnDemoComponent } from './buttons/btn-demo/btn-demo.component';
import { PngContextMenuComponent } from './png-context-menu/png-context-menu.component';
import {ButtonModule, ContextMenuModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    PngDemoRoutingModule,
    ButtonModule,
    ContextMenuModule
  ],
  declarations: [PngDemoComponent, BtnDemoComponent, PngContextMenuComponent]
})
export class PngDemoModule { }

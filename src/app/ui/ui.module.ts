import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UiComponent } from './ui/ui.component';
import { UiRoutingModule } from './ui-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    UiRoutingModule
  ],
  declarations: [UiComponent]
})
export class UiModule { }

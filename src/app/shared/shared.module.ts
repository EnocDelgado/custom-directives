import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomLabelDirective } from './directives/custom-label.directive';


@NgModule({
  declarations: [
    CustomLabelDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CustomLabelDirective
  ]
})
export class SharedModule { }

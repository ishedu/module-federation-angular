import {NgModule} from '@angular/core';
import {UtilsComponent} from './utils.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    UtilsComponent
  ],
  imports: [
    RouterModule,
  ],
  exports: [
    UtilsComponent
  ]
})
export class UtilsModule {
}

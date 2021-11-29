import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./order.component";
import {RouterModule, Routes} from "@angular/router";
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'order-history',
    component: OrderHistoryComponent
  }
]

@NgModule({
  declarations: [
    OrderComponent,
    OrderHistoryComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }

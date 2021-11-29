import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileType, MfeUtil} from "utils";
import {environment} from "../environments/environment";

export const mfe = new MfeUtil();

const routes: Routes = [
  {
    path: 'home',
    component: await mfe.loadRemoteFile({
      remoteName: 'home',
      remoteEntry: `${environment.moduleFederationUrl.app1}remoteHome.js`,
      exposedFile: "HomeComponent",
      exposeFileType: FileType.Component,
    }).then((m) => m.HomeComponent),
  },
  {
    path: 'order',
    loadChildren: () => mfe.loadRemoteFile({
      remoteName: "orders",
      remoteEntry: `${environment.moduleFederationUrl.app3}remoteOrders.js`,
      exposedFile: "OrderModule",
      exposeFileType: FileType.Module
    }).then((m) => m.OrderModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileType, MfeUtil} from "utils";
import {environment} from "../environments/environment";

export const mfe = new MfeUtil();

const routes: Routes = [
  {
    path: 'home',
    component: await mfe.loadRemoteFile({
      remoteName: "home",
      remoteEntry: `${environment.moduleFederationUrl.app1}remoteHome.js`,
      exposedFile: "HomeComponent",
      exposeFileType: FileType.Component,
    }).then((m) => m.HomeComponent),
  },
  {
    path: 'restaurants',
    loadChildren: () => mfe.loadRemoteFile({
      remoteName: "restaurant",
      remoteEntry: `${environment.moduleFederationUrl.app2}remoteRestaurant.js`,
      exposedFile: "RestaurantModule",
      exposeFileType: FileType.Module
    }).then((m) => m.RestaurantModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

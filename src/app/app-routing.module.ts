import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileType, MfeUtil} from "utils";
import {environment} from "../environments/environment";

export const mef = new MfeUtil();

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'restaurants',
    loadChildren: () => mef.loadRemoteFile({
      remoteName: "restaurant",
      remoteEntry: `${environment.moduleFederationUrl.app2}remoteRestaurant.js`,
      exposedFile: "RestaurantModule",
      exposeFileType: FileType.Module
    }).then((m) => m.RestaurantModule),
  },
  {
    path: 'order',
    loadChildren: () => mef.loadRemoteFile({
      remoteName: "orders",
      remoteEntry: `${environment.moduleFederationUrl.app3}remoteOrders.js`,
      exposedFile: "OrderModule",
      exposeFileType: FileType.Module
    }).then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

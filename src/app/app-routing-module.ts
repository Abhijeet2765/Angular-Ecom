import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LgnSgnup } from './lgn-sgnup/lgn-sgnup';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth/auth-guard';
import { FavList } from './fav-list/fav-list';
import { Cart } from './cart/cart';
import { ItemDescription } from './item-description/item-description';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LgnSgnup },
  { path: 'dashboard', component: Dashboard},
  { path: 'fav-list',component:FavList,canActivate:[authGuard]},
  { path: 'cart',component:Cart,canActivate:[authGuard]},
  { path: 'product/:id', component:ItemDescription}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LgnSgnup } from './lgn-sgnup/lgn-sgnup';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LgnSgnup },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

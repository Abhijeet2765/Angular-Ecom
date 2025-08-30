import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LgnSgnup } from './lgn-sgnup/lgn-sgnup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card } from './card/card';
import { NavBar } from './nav-bar/nav-bar';
import { Dashboard } from './dashboard/dashboard';
import { Cart } from './cart/cart';
import { FavList } from './fav-list/fav-list';

@NgModule({
  declarations: [
    App,
    LgnSgnup,
    Card,
    NavBar,
    Dashboard,
    Cart,
    FavList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }

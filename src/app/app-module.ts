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
import { Landing } from './landing/landing';
import { Footer } from './footer/footer';
import { ItemDescription } from './item-description/item-description';
import { Review } from './review/review';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Settings } from './settings/settings';

@NgModule({
  declarations: [
    App,
    LgnSgnup,
    Card,
    NavBar,
    Dashboard,
    Cart,
    FavList,
    Landing,
    Footer,
    ItemDescription,
    Review,
    Settings
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }

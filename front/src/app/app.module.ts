import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatModule} from "./chat/chat.module";

import { AppComponent} from "./core/components/app.component";
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { AppRoutingModule } from "./app-routing.module";
import {AuthModule} from "./auth/auth.module";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChatModule,
    AuthModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {
}

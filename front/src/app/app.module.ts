import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatModule} from "./chat/chat.module";

import { AppComponent} from "./app.component";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import {AuthModule} from "./auth/auth.module";
import { LoginComponent } from './auth/components/login/login.component';

import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
  LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChatModule,
    AuthModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),

    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

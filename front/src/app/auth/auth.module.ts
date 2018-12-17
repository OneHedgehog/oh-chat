import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers} from './reducers'

import {LoginComponent } from "./components/login/login.component";
import {LoginPageComponent} from "./containers/login-page/login-page.component";

import { AuthRoutingModule} from "./auth-routing.module";
import { AuthService} from "./services/auth.service";
import { AuthEffects } from './effects/auth.effect';
import { EffectsModule } from '@ngrx/effects';

export const COMPONENTS = [
  LoginComponent,
  LoginPageComponent
]

@NgModule({  
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('Login Page', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations:[COMPONENTS],
  providers: [AuthService],
  exports: [COMPONENTS]})
export class AuthModule {
  
}

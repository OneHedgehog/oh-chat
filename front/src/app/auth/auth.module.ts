import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent } from "./components/login/login.component";
import {LoginPageComponent} from "./containers/login-page/login-page.component";

import { AuthRoutingModule} from "./auth-routing.module";
import { AuthService} from "./services/auth.service";

export const COMPONENTS = [
  LoginComponent,
  LoginPageComponent
]

@NgModule({  
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations:[COMPONENTS],
  providers: [AuthService],
  exports: [COMPONENTS]})
export class AuthModule {
  
}

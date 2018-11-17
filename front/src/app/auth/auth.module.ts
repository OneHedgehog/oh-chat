import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent } from "./components/login/login.component";

import { AuthRoutingModule} from "./auth-routing.module";

export const COMPONENTS = [
  LoginComponent
]

@NgModule({  
  imports: [
    CommonModule,

    AuthRoutingModule
  ],
  declarations:[COMPONENTS],
  exports: [COMPONENTS]})
export class AuthModule {
  
}

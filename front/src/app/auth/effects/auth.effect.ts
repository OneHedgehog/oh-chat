import { Injectable } from '@angular/core';

import {  Effect, Actions } from '@ngrx/effects';
import { Action } from "@ngrx/store"

import { AuthService} from "../services/auth.service";
import * as login from '../actions/login-page.actions';
import {Observable} from "rxjs";

import 'rxjs/add/operator/debounceTime';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthEffect {

  @Effect()
  $auth$: Observable<Action> = this.actions$
    .ofType(login.LoginPageActionTypes.Login)
    .debounceTime(300)

  constructor(private actions$: Actions, private authService: AuthService) { }
}

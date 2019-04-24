import { Injectable } from '@angular/core';

import {  Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store"

import { AuthService} from "../services/auth.service";
import * as login from '../actions/login-page.actions';
import {Observable, of} from "rxjs";

import { map, exhaustMap } from 'rxjs/operators';

import { Credentials } from "../models/user";

@Injectable()
export class AuthEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(login.LoginPageActionTypes.Login),
    map((action: any) => action.payload),
    exhaustMap( (userCredentails : Credentials ) : any => {
      this.authService.login(userCredentails);
    })
  )

  constructor(private actions$: Actions, private authService: AuthService) { }
}

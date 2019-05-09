import { Injectable } from '@angular/core';

import {  Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store"
import { Router } from '@angular/router'
import { AuthService} from "../services/auth.service";
import * as Login from '../actions/login-page.actions';
import {Observable, of} from "rxjs";
import {map, exhaustMap, catchError, tap} from 'rxjs/operators';
import { Credentials, User, UserError } from "../models/user";

@Injectable()
export class AuthEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(Login.LoginPageActionTypes.Login),
    map((action: User | any ) => action.payload),
    exhaustMap( (userCredentails : Credentials ) : Observable<User | any> =>
      this.authService.login(userCredentails).pipe(
       map( user => new Login.LoginSuccess(user)),
       catchError( error => of(new Login.LoginError(error)))
     )
    )
  );

  @Effect({dispatch: false})
  $loginSuccess: Observable<Action> = this.actions$.pipe(
    ofType(Login.LoginPageActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/']))
  )

  @Effect({dispatch: false})
  $loginError: Observable<Action> = this.actions$.pipe(
    ofType(Login.LoginPageActionTypes.LoginError),
    tap(() => this.router.navigate(['/login']))
  )

  constructor(private actions$: Actions, private authService: AuthService, private router: Router ) { }
}

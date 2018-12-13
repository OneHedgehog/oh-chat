import { Injectable } from '@angular/core';

import {  Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store"

import { AuthService} from "../services/auth.service";
import * as login from '../actions/login-page.actions';
import {Observable} from "rxjs";

import { debounceTime, map, exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthEffect {

  @Effect()
  $auth$: Observable<Action> = this.actions$.pipe(
    ofType(login.LoginPageActionTypes.Login),
    // mergeMap(),
    exhaustMap( eventData => 1)
  )

  constructor(private actions$: Actions, private authService: AuthService) { }
}

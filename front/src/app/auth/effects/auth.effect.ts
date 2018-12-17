import { Injectable } from '@angular/core';

import {  Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store"

import { AuthService} from "../services/auth.service";
import * as login from '../actions/login-page.actions';
import {Observable, of} from "rxjs";

import { debounceTime, map, exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(login.LoginPageActionTypes.Login),
    exhaustMap( eventData => {
      console.log('asd');
      return of();
    })
  )

  constructor(private actions$: Actions, private authService: AuthService) { }
}

import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { Credentials } from "../models/user";
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private apollo: Apollo) { }

  login(userCredentials: Credentials) : Observable<any> {
    console.log('service')
   return this.apollo.watchQuery({
     query: gql`
          {
            user {
              name
            }
          }
        `,
      }).valueChanges;
   }
}

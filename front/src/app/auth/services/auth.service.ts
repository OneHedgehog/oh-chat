import { Injectable } from '@angular/core';

import { Credentials } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(userCredentials: Credentials) {

  }
}

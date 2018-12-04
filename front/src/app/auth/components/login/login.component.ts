import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { LoginPageActions } from '../../actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  onSubmit(e, crendetials) {
    e.preventDefault();
    this.store.dispatch(new LoginPageActions.Login({ credentials: crendetials}))
  }

}

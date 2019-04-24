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
  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public constructor(private store: Store<any>) { }

  public ngOnInit() {
  }

  public onSubmit(e, crendetials) {
    console.log(this.form);
    e.preventDefault();
    this.store.dispatch(new LoginPageActions.Login({ credentials: crendetials}))
  }

}

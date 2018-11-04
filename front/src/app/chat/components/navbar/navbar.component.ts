import {Component, OnInit} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [
    trigger('rotatedState', [
      state('default', style({transform: 'rotate(0)'})),
      state('rotated', style({transform: 'rotate(-180deg)'})),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('150ms ease-in'))
    ]),
    trigger('simpleFadeAnimation', [
      state('hide', style({opacity: 0, display: 'none'})),
      state('show', style({opacity: 1, display: 'block'})),
      transition('hide => show', animate('600ms ease-in')),
      transition('show => hide', animate('600ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  public rotateState: (string | any) = 'default';
  public isUserDataPopupVisible: (string | any) = 'hide';

  constructor() {
  }

  ngOnInit() {
  }

  rotate() {
    this.rotateState = (this.rotateState === 'default' ? 'rotated' : 'default');
    this.showHideUserDataPopup();
    console.log(this.isUserDataPopupVisible);
  }

  showHideUserDataPopup() {
    this.isUserDataPopupVisible = (this.isUserDataPopupVisible === 'hide' ? 'show' : 'hide');
  }

}

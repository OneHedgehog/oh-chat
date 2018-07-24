import {Component, OnInit} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {AnimationStateMetadata} from '@angular/animations/src/animation_metadata';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('150ms ease-in'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  private state = 'default';

  constructor() {
  }

  ngOnInit() {
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

}

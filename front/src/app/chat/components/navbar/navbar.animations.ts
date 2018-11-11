import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const NavbarAntimations = [
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

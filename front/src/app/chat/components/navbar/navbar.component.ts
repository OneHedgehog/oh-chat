import {Component, OnInit} from '@angular/core';
import { NavbarAntimations } from './navbar.animations'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: NavbarAntimations
})
export class NavbarComponent implements OnInit {

  public rotateState: (string | any) = 'default';
  public isUserDataPopupVisible: (string | any) = 'hide';

  ngOnInit() {
  }

  rotate() {
    this.rotateState = this.rotateState === 'default' ? 'rotated' : 'default';
    this.showHideUserDataPopup();
  }

  showHideUserDataPopup() {
    this.isUserDataPopupVisible = (this.isUserDataPopupVisible === 'hide' ? 'show' : 'hide');
  }

}

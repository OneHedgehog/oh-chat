import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

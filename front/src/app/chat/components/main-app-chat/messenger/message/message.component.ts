import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {

  @Input() isUsersMes: boolean;

  constructor() {

  }

  ngOnInit() {
    console.log(this.isUsersMes);
  }

}

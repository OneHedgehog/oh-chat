import { NgModule }             from '@angular/core';
import { RouterModule } from '@angular/router';

import {ChatContainerComponent} from "./containers/chat/chat-container.component";

const chatRoutes = [
  {path: '',  component: ChatContainerComponent }
]

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}

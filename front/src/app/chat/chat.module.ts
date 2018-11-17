import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatContainerComponent} from "./containers/chat/chat-container.component";
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ContactsComponent} from './components/main-app-chat/contacts/contacts.component';
import {MainAppChatComponent} from './components/main-app-chat/main-app-chat.component';
import {MessengerComponent} from './components/main-app-chat/messenger/messenger.component';
import {CalendarComponent} from './components/main-app-chat/calendar/calendar.component';
import {MessagePreviewComponent} from './components/main-app-chat/contacts/message-preview/message-preview.component';
import { MessageComponent } from './components/main-app-chat/messenger/message/message.component';
import { OnehedgehogCalendarComponent } from './components/onehedgehog-calendar/onehedgehog-calendar.component';
import {ChatRoutingModule} from "./chat-routing.module";

export const COMPONENTS = [
  ChatContainerComponent,
  NavbarComponent,
  SidebarComponent,
  ContactsComponent,
  MainAppChatComponent,
  MessengerComponent,
  CalendarComponent,
  MessagePreviewComponent,
  MessageComponent,
  OnehedgehogCalendarComponent,
]

@NgModule({
  imports: [
    CommonModule,   ChatRoutingModule
  ],
  declarations:  COMPONENTS,
  exports: COMPONENTS
})
export class ChatModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppComponent} from './containers/app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ContactsComponent} from './components/main-app-chat/contacts/contacts.component';
import {MainAppChatComponent} from './components/main-app-chat/main-app-chat.component';
import {MessengerComponent} from './components/main-app-chat/messenger/messenger.component';
import {CalendarComponent} from './components/main-app-chat/calendar/calendar.component';
import {MessagePreviewComponent} from './components/main-app-chat/contacts/message-preview/message-preview.component';
import { MessageComponent } from './components/main-app-chat/messenger/message/message.component';
import { OnehedgehogCalendarComponent } from './components/onehedgehog-calendar/onehedgehog-calendar.component';


export const COMPONENTS = [
  AppComponent,
  NavbarComponent,
  SidebarComponent,
  ContactsComponent,
  MainAppChatComponent,
  MessengerComponent,
  CalendarComponent,
  MessagePreviewComponent,
  MessageComponent,
  OnehedgehogCalendarComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:  COMPONENTS,
  exports: COMPONENTS
})
export class ChatModule { }

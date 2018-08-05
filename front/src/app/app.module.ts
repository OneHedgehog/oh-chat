import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactsComponent } from './main-app-chat/contacts/contacts.component';
import { MainAppChatComponent } from './main-app-chat/main-app-chat.component';
import { MessengerComponent } from './main-app-chat/messenger/messenger.component';
import { CalendarComponent } from './main-app-chat/calendar/calendar.component';
import { MessagePreviewComponent } from './main-app-chat/contacts/message-preview/message-preview.component';


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, SidebarComponent, ContactsComponent, MainAppChatComponent, MessengerComponent, CalendarComponent, MessagePreviewComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

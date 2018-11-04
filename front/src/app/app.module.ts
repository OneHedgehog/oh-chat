import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatModule} from "./chat/chat.module";

import { AppComponent} from "./chat/containers/app.component";


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

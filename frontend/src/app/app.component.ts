import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './new-messages.component';

@Component({
  selector: 'app-root',
  template: `<h1>Message Board</h1>
            <new-messages (onPosted)='onPosted($event)'></new-messages>
            <messages></messages>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild( MessagesComponent ) messages: MessagesComponent;
  onPosted(message) {
      console.log(message);
     // this.messages.messages.push(message);
  }
}

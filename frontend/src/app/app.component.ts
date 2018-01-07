import { Component} from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './new-messages.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  template: `<nav></nav>
            <new-messages></new-messages>
            <messages></messages>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

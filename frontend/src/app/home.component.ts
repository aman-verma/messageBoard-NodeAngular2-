import { Component} from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './new-messages.component';
import { NavComponent } from './nav.component';
@Component({
    selector: 'home',
    template: `
              <new-messages></new-messages>
              <messages></messages>
              `,
    styleUrls: ['./app.component.css']
  })

export class HomeComponent {
}
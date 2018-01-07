import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService} from './web.service';
import { NewMessagesComponent } from './new-messages.component';
import { HttpModule } from '@angular/http';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';

const routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessagesComponent
}];

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessagesComponent, NavComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    FormsModule, BrowserAnimationsModule, MatButtonModule, MatCardModule , MatInputModule, MatSnackBarModule, MatToolbarModule
    , RouterModule.forRoot(routes)
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

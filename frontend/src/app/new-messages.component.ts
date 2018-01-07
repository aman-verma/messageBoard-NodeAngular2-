import { Component } from '@angular/core';
import { WebService} from './web.service';
import { Console } from '@angular/core/src/console';

@Component({
    selector: 'new-messages',
    template: `<div>
                <mat-card class='card'>
                    <mat-card-content>
                        <mat-input-container>
                        <input [(ngModel)]='message.owner' matInput placeholder='Name'>
                        </mat-input-container>
                        <mat-input-container>
                        <textarea [(ngModel)]='message.text' matInput placeholder="Message"></textarea>
                        </mat-input-container>
                        <mat-card-actions>
                            <button (click)= "post()" mat-button color="primary">Post</button>
                        </mat-card-actions>
                    </mat-card-content>
              </mat-card>
              </div>`
})
export class  NewMessagesComponent {

    constructor(private webService: WebService) { }
     message= {
          owner : '' ,
          text: ''
        };

     post() {
        this.webService.postMessage( this.message ) ;
     }
}


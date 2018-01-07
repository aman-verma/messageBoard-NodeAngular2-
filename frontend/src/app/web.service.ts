import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:63145/api';
    messages = [];
    constructor(private http: Http) {
        this.getMessages();
    }
    async getMessages() {
       const response = await this.http.get( this.BASE_URL + '/messages').toPromise();
       this.messages = response.json();
    }
    async postMessage(message) {
        const response = await this.http.post(this.BASE_URL + '/message', message ).toPromise();
        this.messages.push(response.json());
    }
}

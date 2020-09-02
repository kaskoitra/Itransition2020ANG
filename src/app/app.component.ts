import { Component } from '@angular/core';
import {MessageService} from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messages: Object =[];

  constructor(private message: MessageService) {
    this.message.getMessages().subscribe(messages => {
        this.messages = messages;
    });
  }

  isUserRightsAdmin() {
    return this.message.getUserRights() == "1@1.1";
  }

  logout() {
    return this.message.logout();
  }

  goToPrivatePage() {
    this.message.goToPrivatePage();
  }
}

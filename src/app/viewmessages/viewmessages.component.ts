import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-viewmessages',
  templateUrl: './viewmessages.component.html',
  styleUrls: ['./viewmessages.component.css']
})
export class ViewmessagesComponent {

  messages: Object =[];

  constructor(private message: MessageService) {
    this.message.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private _messageService: MessageService) { }

  ngOnInit(): void {
  }

  logMessage(first_name, last_name, email, message){
   this._messageService.logMessage(first_name, last_name, email, message);
  }

}

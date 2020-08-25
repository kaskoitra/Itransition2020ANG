import { Component } from '@angular/core';
import {MessageService} from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private message: MessageService) {
    this.message.getMessages().subscribe(data => console.log(data));
  }
}

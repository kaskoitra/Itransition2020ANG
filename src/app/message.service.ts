import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  logMessage(first_name, last_name, email, message) {
    console.log(first_name, last_name, email, message);
  }

  getMessages(){
    const url = 'http://localhost:8080/';
    return this.http.get(url);
  }
}

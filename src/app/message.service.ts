import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, Routes} from '@angular/router';
import {Observable} from 'rxjs';
import {ViewmessagesComponent} from './viewmessages/viewmessages.component';

export class Message {
  id: number;
  userId: number;
  message: String;
}

export class User {
  id: number;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  role : {
    id: number;
    title: String;
    salt: String;
  }

}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  userRights : String;

  constructor(private http: HttpClient, private router: Router) { }

  getMessages(){
    const url = 'http://localhost:8080/';
    return this.http.get(url + 1);
  }

  logMessage(first_name, last_name, email, mes){
    const url = 'http://localhost:8080/message';
    const message = {
      id: 1,
      userId: 1,
      message: mes
    };

    this.http.post<Message>(url, message).subscribe();
  }

  login(username, password) {
    const url = 'http://localhost:8080/LoginServlet';
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    let user = {
      email: username,
      password: password
    };
    console.log("hello1");
    // @ts-ignore
    this.http.post(url, JSON.stringify(user), {headers: headers}).subscribe(response => {
      console.log("hello1");
      let test = JSON.stringify(response);
      user = JSON.parse(test);
      this.userRights = user.email;
      this.router.navigate(['message']);
    });
  }

  getUserRights() {
    return this.userRights;
  }

  logout() {
    const url = 'http://localhost:8080/LogoutServlet';
    this.userRights = null;
    this.http.get(url).subscribe();
  }
  
  goToPrivatePage() {
    const url = 'http://localhost:8080/user/private';
    this.http.get(url).subscribe(response => console.log(response));
    this.router.navigate(['privatepage']);
  }
}

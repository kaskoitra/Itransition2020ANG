import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResponseEntity} from '../model/api.response';
import {Router} from '@angular/router';
import {ApiService} from '../core/api.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  user: ResponseEntity;
  userName: ResponseEntity;
  username: String;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    window.localStorage.removeItem('token');
  }

  login(username, password) {
    this.username = username;
    const loginPayload = {
      username: username,
      password: password
    };
    this.apiService.login(loginPayload).subscribe(
      data => {
        window.localStorage.setItem('token', data.token);
        this.apiService.getOne(this.username).subscribe( data2 => {
          console.log("2");
          window.localStorage.setItem('usersData', String(data2.id));
          console.log(this.userName);
          this.router.navigate(['user']);
        });
      },
      e => {
        this.invalidLogin = true;
      }
    );
  }

}

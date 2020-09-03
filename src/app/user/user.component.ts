import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../core/api.service';
import {ResponseEntity} from '../model/api.response';
import {User} from '../message.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import {MatListOption, MatSelectionList, MatSelectionListChange} from '@angular/material/list';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: ResponseEntity;
  usersArray: User[];
  trash = faTrash;
  lock = faLock;
  unlock = faUnlockAlt;
  usersIdToChange = [];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.getUsers();
  }

  deleteUsers() {
    this.usersIdToChange.map( userId => {
      this.apiService.deleteUser(userId)
        .subscribe();
    });
    this.getUsers();
  }




  setSelectedUsers(event: MatListOption[]) {
    this.usersIdToChange = [];
    event.map(user => {
      this.usersIdToChange.push(user.value.id)});
    console.log(this.usersIdToChange);
  }

  private getUsers() {
    this.apiService.getUsers()
      .subscribe( data => {
        this.users = data;
        // @ts-ignore
        this.usersArray = Array.from(this.users);
        console.log(this.usersArray);
      });
  }
}

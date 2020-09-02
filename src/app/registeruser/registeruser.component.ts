import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../core/api.service';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisterUserComponent implements OnInit {

  invalidLogin: boolean = false;
  title = 'Tic Tac Toe';
  isAuthenticated: boolean = true;


  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;
  gender: [];

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.getOne(this.addForm.controls.username.value).subscribe( data5 => {
      if (data5 !== null) {
        this.invalidLogin = true;
      } else {
        this.apiService.createUser(this.addForm.value)
          .subscribe( data => {
            this.router.navigate(['login']);
          });
      }
    });
  }

  register() {
    this.apiService.getOne(this.addForm.controls.username.value).subscribe( data5 => {
      if (data5 !== null) {
        this.invalidLogin = true;
      } else {
        this.apiService.createUser(this.addForm.value)
          .subscribe( data => {
            this.router.navigate(['login']);
          });
      }
    });
  }
}

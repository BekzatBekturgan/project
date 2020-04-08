import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {User} from '../User';
import {UserService} from '../user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  users: User[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
    this.getUsers();
  }

  get f() { return this.loginForm.controls; }


  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    var user;
    for(user in this.users){
      if(this.f.username.value === user.username){
        if(this.f.password.value === user.password){
          window.alert('Login is success');
        }
      }
    }
    
  }
  login(username, password){
    var user;
    for(user in this.users){
      if(user.username === username && user.password === password){
        return true;
      }
    }
    return false;
  }
}

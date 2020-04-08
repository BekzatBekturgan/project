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
    this.getUsers()
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
    if(this.login(this.f.username.value, this.f.password.value) == true){
      window.alert('Login is success');
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

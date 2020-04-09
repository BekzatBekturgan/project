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
  home = false;
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
    for(var user in this.users){
      if(this.users[user].username === this.f.username.value){
        if(this.users[user].password === this.f.password.value){
          window.alert('login is success');
          this.home = true;
        }
      }
    }
    if(this.home == true){
      this.router.navigateByUrl('/categories');
    }
    
  }
}

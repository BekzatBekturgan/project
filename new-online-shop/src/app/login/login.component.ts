import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {User} from '../User';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  logged=false;
  username = "";
  password = "";
  id: any;
  public user_name="";

  constructor(private productService: ProductService,
              private location: Location,){}
  ngOnInit(){
    let token = localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
  }
  login(){
      this.productService.login(this.username,this.password).subscribe( res=>{
        localStorage.setItem('token', res.token);
        this.logged=true;
        this.username='';
        this.password='';
      })
    }
    logout(){
      localStorage.clear();
      this.logged = false;
    }
   
    goBack(): void {
      this.location.back();
    }
  
}


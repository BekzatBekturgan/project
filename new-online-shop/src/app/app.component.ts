import { Component, OnInit} from '@angular/core';
import { ProductService } from './product.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WATCH STORE';
  logged=false;
  public username = "";
  password = "";

  constructor(private productService: ProductService){}
  ngOnInit(){
    let token = localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
  }
  login(){
    //  console.log(this.username)
    //  console.log(this.password)
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
}

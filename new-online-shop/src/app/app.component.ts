import { Component } from '@angular/core';
import { ProductService } from './product.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WATCH STORE';
  logged=true;
  username = "";
  password = "";

  constructor(private productService: ProductService){}

  login(){
    this.productService.login(this.username, this.password)
      .subscribe(res=>{
        console.log(res);
      })
    // console.log(this.username);
    // console.log(this.password);
    // this.logged=true;
  }
}

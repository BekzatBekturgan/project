import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from './slider/slider.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { QuestionsComponent } from './questions/questions.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppInterceptor} from "./appinterceptor";



@NgModule({
   declarations: [
      AppComponent,
      CategoriesComponent,
      ProductsComponent,
      ProductdetailsComponent,
      CartComponent,
      LoginComponent,
      RegistrationComponent,
      ProductSearchComponent,
      QuestionsComponent,
      BottomBarComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      SliderModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AppInterceptor,
         multi: true
       }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

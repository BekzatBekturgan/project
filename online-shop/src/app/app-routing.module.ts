import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MainComponent } from './main/main.component';
import { ProductDetailComponent} from './product-detail/product-detail.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'main', component: MainComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

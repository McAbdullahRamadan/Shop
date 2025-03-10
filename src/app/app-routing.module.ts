import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminOrdersComponent } from './Amdin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Amdin/admin-products/admin-products.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'orders',component:MyOrderComponent},
  {path:'admin/orders',component:AdminOrdersComponent},
  {path:'admin/products',component:AdminProductsComponent},
  {path:'Shopingcart',component:ShopingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

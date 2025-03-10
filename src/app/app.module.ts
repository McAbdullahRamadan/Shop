import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminOrdersComponent } from './Amdin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Amdin/admin-products/admin-products.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrderComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ShopingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShopComponent } from './store/shop/shop.component';
import { ProductComponent } from './store/product/product.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { OrdersComponent } from './store/orders/orders.component';
import { LoginComponent } from './store/login/login.component';
import { CategoryService } from './services/category/category.service';
import { OrderService } from './services/order/order.service';
import { ProductService } from './services/product/product.service';
import { UsersService } from './services/users/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ROUTING } from './app.routing';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    ProductComponent,
    CheckoutComponent,
    OrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [CategoryService, OrderService, ProductService, UsersService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

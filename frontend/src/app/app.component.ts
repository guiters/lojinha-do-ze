import { Component } from '@angular/core';
import { CategoryService } from './services/category/category.service';
import { OrderService } from './services/order/order.service';
import { ProductService } from './services/product/product.service';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private categoryService: CategoryService,
    private orderService: OrderService,
    private productService: ProductService,
    private usersService: UsersService
  ) {
    this.categoryService.getCategorys().subscribe(res => {
      console.log(res);
    });
    this.orderService.getOrders().subscribe(res => {
      console.log(res);
    });
    this.productService.getProducts().subscribe(res => {
      console.log(res);
    });
    this.usersService.getUsers().subscribe(res => {
      console.log(res);
    });
  }
}

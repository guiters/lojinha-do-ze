import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[];
  search;
  constructor(private productService: ProductService, private route: ActivatedRoute,
    private cartService: CartService, private toastr: ToastrService) {
    this.search = this.route.snapshot.paramMap.get('search');
  }

  ngOnInit() {
    if (this.search === null) {
      this.productService.getProducts().subscribe(res => {
        this.products = res;
      });
    } else {
      this.productService.getProduct(0, this.search).subscribe(res => {
        this.products = res;
      });
    }

  }

  addtocart(id) {
    this.cartService.addItem(id);
    this.toastr.success('Item Add to cart', 'Success!');
  }

}

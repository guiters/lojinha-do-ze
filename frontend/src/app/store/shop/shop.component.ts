import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[];
  search;
  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.search = this.route.snapshot.paramMap.get('search');
    console.log(this.search);
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

}

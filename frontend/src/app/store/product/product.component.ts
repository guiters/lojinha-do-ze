import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category/category';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  id;
  url: string;
  categorys: Category[] = [];
  prodcat;
  constructor(private productService: ProductService, private categoryService: CategoryService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.productService.getProduct(this.id).subscribe(res => {
      this.product = res[0];
      this.url = 'product/' + this.product.id + '/' + this.product.name;
      this.prodcat = this.product.category.split('|');
      for (let i = 0; i < this.prodcat.length; i++) {
        this.categoryService.getCategory(this.prodcat[i]).subscribe(cats => {
          this.categorys.push(cats);
        });
      }
    });
  }

}

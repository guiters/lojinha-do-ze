import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product/product';
import { CepService } from '../../services/cep/cep.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Product[] = [];
  cartQTD = {};
  totalPrice = 0;
  constructor(private productService: ProductService, private cepService: CepService) { }

  ngOnInit() {
    const theCart = JSON.parse(sessionStorage.getItem('cart'));
    const dowCart = [];
    const cartQTD = {};
    theCart.forEach(function (x) { cartQTD[x] = (cartQTD[x] || 0) + 1; });
    this.cartQTD = cartQTD;
    for (let i = 0; i < theCart.length; i++) {
      if (dowCart.indexOf(theCart[i]) === -1) {
        dowCart.push(theCart[i]);
        this.productService.getProduct(theCart[i]).subscribe(res => {
          this.cart.push(res[0]);
          this.totalPrice += res[0].price * this.cartQTD[res[0].id];
        });
      }
    }
  }

  cepFind(event) {
    this.cepService.getCep(event.target.value).subscribe(res => {
      if (!res['erro']) {
        console.log(res);
      }
    });
  }
}

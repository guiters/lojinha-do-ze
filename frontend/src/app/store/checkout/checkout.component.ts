import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product/product';
import { CepService } from '../../services/cep/cep.service';
import { OrderService } from '../../services/order/order.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../../models/order/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Product[] = [];
  cartQTD = {};
  totalPrice = 0;
  myForm: FormGroup;

  constructor(private productService: ProductService,
    private cepService: CepService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl(),
      'postcode': new FormControl(),
      'address_number': new FormControl(),
      'address_additional': new FormControl(),
      'address': new FormControl(),
      'city': new FormControl(),
      'state': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl()
    });
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


  createOrder(newOrder: FormGroup) {
    /*const order: Order = {
      id: '',
      product_id: '',
      status: 1,
      user_id: 1,
      timestamp: '1'
    };
    this.orderService.createOrder(order).subscribe(result => {
      this.toastr.success('Criado com sucesso');
    });
    */
    console.log(newOrder);
  }

  cepFind(event) {
    this.cepService.getCep(event.target.value).subscribe(res => {
      if (!res['erro']) {
        this.myForm.get('address').setValue(res['logradouro']);
        this.myForm.get('city').setValue(res['localidade']);
        this.myForm.get('state').setValue(res['uf']);
        console.log(this.myForm.controls['address'].value);
        console.log(res);
      }
    });
  }
}

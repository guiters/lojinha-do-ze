import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product/product';
import { CepService } from '../../services/cep/cep.service';
import { OrderService } from '../../services/order/order.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../../models/order/order';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Product[] = [];
  cartQTD = {};
  totalPrice = 0;
  totalProduct = '';
  myForm: FormGroup;

  constructor(private productService: ProductService,
    private cepService: CepService,
    private orderService: OrderService,
    private userService: UsersService,
    public toastr: ToastrService
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
      this.totalProduct += theCart[i] + '|';
      if (dowCart.indexOf(theCart[i]) === -1) {
        dowCart.push(theCart[i]);
        this.productService.getProduct(theCart[i]).subscribe(res => {
          this.cart.push(res[0]);
          this.totalPrice += res[0].price * this.cartQTD[res[0].id];
        });
      }
    }
  }


  createOrder() {
    let date: any = new Date().getTime();
    date = date.toString();
    const order: Order = {
      id: '0',
      product_id: this.totalProduct,
      status: 1,
      user_id: 1
    };
    console.log(sessionStorage.getItem('auth'));

    if (sessionStorage.getItem('auth') === null) {
      const user: User = {
        id: '0',
        name: this.myForm.get('name').value,
        email: this.myForm.get('email').value,
        password: this.myForm.get('password').value,
        zip_code: this.myForm.get('postcode').value,
        zip_number: this.myForm.get('address_number').value,
        zip_additional: this.myForm.get('address_additional').value,
        social_id: '0'
      };
      this.userService.createUser(user).subscribe(res => {
        order.user_id = res['RegistredID'];
        this.newOrder(order);
        sessionStorage.setItem('auth', res['RegistredID']);
        this.toastr.success('Parabens voce foi cadastrado!');
      });
    } else {
      order.user_id = sessionStorage.getItem('auth');
    }

  }

  newOrder(order: Order) {
    this.orderService.createOrder(order).subscribe(result => {
      this.toastr.success('Pedido criado com sucesso');
    });
  }

  cepFind(event) {
    this.cepService.getCep(event.target.value).subscribe(res => {
      if (!res['erro']) {
        this.myForm.get('address').setValue(res['logradouro']);
        this.myForm.get('city').setValue(res['localidade']);
        this.myForm.get('state').setValue(res['uf']);
      }
    });
  }
}

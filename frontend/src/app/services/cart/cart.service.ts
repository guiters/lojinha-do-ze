import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = sessionStorage.getItem('cart');
  constructor() { }

  addItem(id) {
    let theCart = JSON.parse(sessionStorage.getItem('cart'));
    console.log(theCart);
    if (theCart !== null ) {
      theCart.push(id);
    } else {
      theCart = [id];
    }
    console.log(theCart);
    sessionStorage.setItem('cart', JSON.stringify(theCart));
  }
}

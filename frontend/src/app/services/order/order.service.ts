import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import 'rxjs/Rx';
import { Order } from '../../models/order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  api = environment.url;
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.request<Order[]>('GET', this.api + 'order',
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }

  createOrder(order: Order): Observable<any> {
    return this.http.request('POST', this.api + 'order',
      {
        body: JSON.stringify(order),
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      }).map(res => res[0]);
  }

  getOrder(id): Observable<Order> {
    return this.http.request<Order>('GET', this.api + 'order?id=' + id,
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      }).map(res => res[0]);
  }

  editOrder(order: Order, id) {
    return this.http.request('PUT', this.api + 'order?id=' + id,
      {
        body: order, headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }

  deleteOrder(id) {
    return this.http.request('DELETE', this.api + 'order?id=' + id,
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import 'rxjs/Rx';
import { Product } from '../../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = environment.url;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.request<Product[]>('GET', this.api + 'product',
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }

  createProduct(product: Product): Observable<any> {
    return this.http.request('POST', this.api + 'product',
      {
        body: JSON.stringify(product),
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      }).map(res => res[0]);
  }

  getProduct(id): Observable<Product> {
    return this.http.request<Product>('GET', this.api + 'product?id=' + id,
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      }).map(res => res[0]);
  }

  editProduct(product: Product, id) {
    return this.http.request('PUT', this.api + 'product?id=' + id,
      {
        body: product, headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }

  deleteProduct(id) {
    return this.http.request('DELETE', this.api + 'product?id=' + id,
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import 'rxjs/Rx';
import { Category } from '../../models/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  api = environment.url;
  constructor(private http: HttpClient) { }

  getCategorys(): Observable<Category[]> {
    return this.http.request<Category[]>('GET', this.api + 'category',
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }

  createCategory(category: Category): Observable<any> {
    return this.http.request('POST', this.api + 'category',
      {
        body: JSON.stringify(category),
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      }).map(res => res[0]);
  }

  getCategory(id): Observable<Category> {
    return this.http.request<Category>('GET', this.api + 'category?id=' + id,
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      }).map(res => res[0]);
  }

  editCategory(category: Category, id) {
    return this.http.request('PUT', this.api + 'category?id=' + id,
      {
        body: category, headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }

  deleteCategory(id) {
    return this.http.request('DELETE', this.api + 'category?id=' + id,
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }
}

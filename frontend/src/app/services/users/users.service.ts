import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import 'rxjs/Rx';
import { User } from '../../models/user/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api = environment.url;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.request<User[]>('GET', this.api + 'users',
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }

  createUser(user: User): Observable<any> {
    return this.http.request('POST', this.api + 'users',
      {
        body: JSON.stringify(user),
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      }).map(res => res[0]);
  }

  getUser(id): Observable<User> {
    return this.http.request<User>('GET', this.api + 'users?id=' + id,
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      }).map(res => res[0]);
  }

  editUser(user: User, id) {
    return this.http.request('PUT', this.api + 'users?id=' + id,
      {
        body: user, headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }

  deleteUser(id) {
    return this.http.request('DELETE', this.api + 'users?id=' + id,
      {
        headers: new HttpHeaders({ 'Authorization': environment.apikey })
      });
  }
}

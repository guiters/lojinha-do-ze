import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  getCep(cep) {
    return this.http.request('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
  }
}

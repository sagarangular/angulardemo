import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getData(){
    var url = "https://fakestoreapi.com/products/categories";
    return this.http.get(url);
  }
}

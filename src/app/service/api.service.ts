import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("https://fakestoreapi.com/products?limit=5").pipe(map((res:any)=>{return res;}))
  }
}

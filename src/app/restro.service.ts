import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestroService {
  constructor(private http:HttpClient) { }
  getData(){
    let url="http://localhost:3000/restros";
    return this.http.get(url)
  }
}

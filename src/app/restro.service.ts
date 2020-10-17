import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestroService {
  url="http://localhost:3000/restros";
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url)
  }
  saveRestro(data){
    return this.http.post(this.url,data)
  }
  deleteRestro(id){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentRestro(id){
    return this.http.get(`${this.url}/${id}`)
  }
  updateRestro(id,data){
    return this.http.put(`${this.url}/${id}`,data)
  }
}

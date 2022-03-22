import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Tithe } from '../classes/tithe';
import { Tithes } from '../classes/tithes';


@Injectable({
  providedIn: 'root'
})
export class TitheService {


  private baseUrl = 'http://localhost:8080/dashboard/tithe';  

  private tithelistUrl = 'http://localhost:8080/dashboard/tithelist';
  constructor(private http:HttpClient) {
   }
   public findAll(): Observable<Tithes[]> {
    return this.http.get<Tithes[]>(this.tithelistUrl);
  }

   addTithe(tithe: Tithe): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, tithe);
  }  
  getTithe(id: number): Observable<Object> {
    console.log({id});
    return this.http.get(`${this.tithelistUrl}/get/${id}`);
  }
  
  updateTithe(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
  
  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

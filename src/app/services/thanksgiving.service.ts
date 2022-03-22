import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thanksgiving } from '../classes/thanksgiving';
import { Thanksgivings } from '../classes/thanksgivings';

@Injectable({
  providedIn: 'root'
})
export class ThanksgivingService {

  private baseUrl = 'http://localhost:8080/dashboard/thanksgiving';

  private thankslistUrl = 'http://localhost:8080/dashboard/thanksgivinglist';

  constructor(private http: HttpClient) { }
  
  public findAll(): Observable<Thanksgiving[]> {
    return this.http.get<Thanksgiving[]>(this.thankslistUrl);
  }

  addThanks(thanks: Thanksgivings): Observable<object> {
    return this.http.post(`${this.baseUrl}`, thanks);
  }
  getThanks(id: number): Observable<Object> {
    return this.http.get(`${this.thankslistUrl}/get/${id}`);
  }
  updateThanks(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);   
  }
 delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

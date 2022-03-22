import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offering } from '../classes/offering';
import { Offerings } from '../classes/offerings';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {
  private baseUrl = 'http://localhost:8080/dashboard/offerings'; 

  private offeringlistUrl = 'http://localhost:8080/dashboard/offeringlist';

  constructor(private http:HttpClient) { }

  public findAll(): Observable<Offering[]> {
    return this.http.get<Offering[]>(this.offeringlistUrl);
  }
  
addOffering(offering: Offerings): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, offering);
}
getOffering(id: number): Observable<Object> {
  return this.http.get(`${this.offeringlistUrl}/get/${id}`);
}

updateOffering(id: number, off: Offerings): Observable<Object> {
  return this.http.put(`${this.baseUrl}/update/${id}`, off);
}

delete(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
}
}

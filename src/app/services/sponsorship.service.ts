import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsorship } from '../classes/sponsorship';
import { Sponsorships } from '../classes/sponsorships';

@Injectable({
  providedIn: 'root'
})
export class SponsorshipService {

  private baseUrl = 'http://localhost:8080/dashboard/sponsors';
  private sponsorlistUrl = 'http://localhost:8080/dashboard/sponsorlist';

  constructor(private http:HttpClient) { }

  public findAll(): Observable<Sponsorships[]> {
    return this.http.get<Sponsorships[]>(this.sponsorlistUrl);
  }
  addSponsor(sponsor: Sponsorship): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, sponsor);
}
getSponsor(id: number): Observable<Object> {
  return this.http.get(`${this.sponsorlistUrl}/get/${id}`);
}

updateSponsor(id: number, spo: Sponsorship): Observable<Object> {
  return this.http.put(`${this.baseUrl}/update/${id}`, spo);
}

delete(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
}
}

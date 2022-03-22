import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../classes/member';
import { Members } from '../classes/members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private baseUrl = 'http://localhost:8080/dashboard/members'; 

  private memberlistUrl = 'http://localhost:8080/dashboard/memberlist';

  constructor(private http:HttpClient) { }

  public findAll(): Observable<Member[]> {
    return this.http.get<Member[]>(this.memberlistUrl);
  }
  
  addMember(member: Members): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, member);
}
getMember(id: number): Observable<Object> {
  return this.http.get(`${this.memberlistUrl}/get/${id}`);
}

updateMembers(id: number, mem: Members): Observable<Object> {
  return this.http.put(`${this.baseUrl}/update/${id}`, mem);
}

delete(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
}
}
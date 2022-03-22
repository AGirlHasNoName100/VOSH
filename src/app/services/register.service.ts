import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../classes/registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/dashboard/registration'; 

  constructor(private http:HttpClient) { }

  addUser(register: Registration): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, register);
}
}

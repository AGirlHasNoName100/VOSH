import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../classes/department';
import { Departments } from '../classes/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private baseUrl = 'http://localhost:8080/dashboard/departments';

  private deptlistUrl = 'http://localhost:8080/dashboard/deptlist';
 // private headers;

  constructor(private http: HttpClient) { 
    //this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  public findAll(): Observable<Department[]> {
    return this.http.get<Department[]>(this.deptlistUrl);
  }

  addDept(dept: Departments): Observable<object> {
    return this.http.post(`${this.baseUrl}`, dept);
  }
  getDept(id: number): Observable<Object> {
    return this.http.get(`${this.deptlistUrl}/get/${id}`);
  }

  updateDept(id: number, dept: Departments): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, dept);
    
  }
  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

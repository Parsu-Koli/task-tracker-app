// src/app/serv.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  

  // constructor(private http: HttpClient) {}
  http=inject(HttpClient);

  getdata() {
    return this.http.get('/api/EmployeeManagement/GetAllEmployees');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskTrackerserviceService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://localhost:7096/api/tasks';


  getTasks() {
    return this.http.get(this.baseUrl);
  }
  getTaskById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  postTask(data: any) {
    return this.http.post('https://localhost:7096/api/Tasks', data);
  }

  updateTask(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteTask(id: number) {
    return this.http.delete(`https://localhost:7096/api/Tasks/${id}`);
  }

}
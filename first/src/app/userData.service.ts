import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http :HttpClient) { }

  saveNewDept(data:any){
    return this.http.post('/api/EmployeeManagement/AddNewDepartment', data);
  }

  getAllDep(){
    return this.http.get('/api/EmployeeManagement/GetParentDepartment');
  }


}

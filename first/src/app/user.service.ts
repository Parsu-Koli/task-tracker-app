import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http:HttpClient) { }

  dataget(){
    return this.http.get('/api/EmployeeManagement/GetParentDepartment');

  }

  datapost(data:any){

    return this.http.post('/api/EmployeeManagement/AddNewDepartment',data);

  }
}

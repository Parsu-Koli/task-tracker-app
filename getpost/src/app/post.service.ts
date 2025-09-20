import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private htp:HttpClient) { }
  // postdata(data:any){
  //   return this.http.post('/api/Complaint/GetParentDepartment', data);
  // }

  get(){
    return this.htp.get('/api/EmployeeManagement/GetAllChildDepartment');
  }
}

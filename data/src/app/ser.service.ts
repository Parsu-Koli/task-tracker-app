import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get('/api/BusBooking/GetBusLocations');
  }

  postdata(data:any)
  {

    return this.http.post('/api/BusBooking/PostBusLocation',data);

  }

}

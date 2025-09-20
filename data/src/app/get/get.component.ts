import { Component, inject, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms'


@Component({
  selector: 'app-get',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent implements OnInit {
  allusers:any[]=[];

  http=inject(SerService);

  ngOnInit():void{
    this.http.getdata().subscribe((data1:any)=>{
      this.allusers=data1;
      console.log(this.allusers);
    })
  }



  queryobj:any={
    queryId:0,
    name:"",
    city:"",
    
  }

  

  get()
  {
    this.http.getdata().subscribe((res:any)=>{
      this.allusers=res.data;
      
    });
  }

  
  save(){
    this.http.postdata(this.queryobj).subscribe((res:any)=>{
      alert("Successfully added the data");
      this.get();
    });
  }

   a :string="demo";
  

}

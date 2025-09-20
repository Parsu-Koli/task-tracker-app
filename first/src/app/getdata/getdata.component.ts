import { Component, inject, OnInit } from '@angular/core';
import { GetService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getdata',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './getdata.component.html',
  styleUrl: './getdata.component.css'
})
export class GetdataComponent implements OnInit{

alluser:any[]=[];

getuser=inject(GetService);

ngOnInit(): void {
    this.getuser.dataget().subscribe((data1:any)=>{
      this.alluser=data1.data;
    });
}

deptobj:any={
  departmentId:0,
  departmentName:'',
  dearrtmentLogo:''
}

getttdata(){
  this.getuser.dataget().subscribe((res:any)=>{
    
    this.alluser = res.data;
   

  });
}


onSave(){

  this.getuser.datapost(this.deptobj).subscribe((data:any)=>{
    debugger;
    alert("Department Is SuccessFully Added");
    this.getttdata();
  })
}



}

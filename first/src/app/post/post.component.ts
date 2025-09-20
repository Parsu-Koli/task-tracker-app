import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../userData.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  deptobj:any={
    departmentId: 0,
    departmentName: '',
    departmentLogo: ''

  };
deptList:any[] = [];

  constructor(private apiser:PostService) { }
  

  ngOnInit(): void {
   this.getDepartment();
  }

  
  getDepartment() {
   
      this.apiser.getAllDep().subscribe((res: any) => {
      debugger;
      console.log(res);
      this.deptList = res.data;
      
      console.log( this.deptList);
    })
   
  }


  onSave() {
    debugger;
    this.apiser.saveNewDept(this.deptobj).subscribe((res: any) => {
    debugger;
      alert("Department created successfully");
      this.getDepartment();

  
    });

  
   
}

}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];

  constructor(private api: ServService) {}

  ngOnInit() {
    this.api.getdata().subscribe({
     
      next: (data:any) => {
         debugger;
        this.employees = data;
      }
    });
  }
}

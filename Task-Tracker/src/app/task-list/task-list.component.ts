import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskTrackerserviceService } from '../task-trackerservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks: any [] = [];

 
  

  constructor(private apiservice: TaskTrackerserviceService,private router:Router) { }

  ngOnInit(): void {
    this.apiservice.getTasks().subscribe((data: any)=>{
      this.tasks = data;
      console.log(this.tasks);
    });
  } 
 
  EditTask(id:number){
    this.router.navigate(['/task-form',id]);
  }

  deleteTask(id:number){
    this.apiservice.deleteTask(id).subscribe((res)=>{
      this.tasks = this.tasks.filter(item => item.id !== id);
    });
  }

  

}

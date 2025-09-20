import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskTrackerserviceService } from '../task-trackerservice.service';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {
  totalTasks = 0;
  pendingTasks = 0;
  completedTasks = 0;
  recentTasks: any = [];
  lastAddedDate: Date = new Date();


  constructor(private ser: TaskTrackerserviceService) {

    this.ser.getTasks().subscribe((data: any) => {
      this.totalTasks = data.length;
      this.pendingTasks = data.filter((task: any) => !task.isCompleted).length;
      this.completedTasks = data.filter((task: any) => task.isCompleted).length;
      this.recentTasks = data.slice(-5).reverse();
      if (data.length > 0) {
        this.lastAddedDate = new Date(data[data.length - 1].createdAt);
      } else {
        this.lastAddedDate = new Date();
      }
    });
   }



  



}

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskTrackerserviceService } from '../task-trackerservice.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {
  // Local object for ngModel binding
  array = {
    title: '',
    description: '',
    status: ''
  };

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(TaskTrackerserviceService);
  private fb = inject(FormBuilder);

  taskId?: number;
  isEditMode: boolean = false;

  ngOnInit(): void {
    // Get the ID from route
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.taskId && !isNaN(this.taskId)) {
      this.isEditMode = true;

      // Only fetch once
      this.service.getTaskById(this.taskId).subscribe((task: any) => {
        this.array = {
          title: task.title,
          description: task.description,
          status: task.status
        };
      });
    }
  }

  addtask() {

    const payload = {
      Id: this.taskId ?? 0, // Use 0 or undefined for new tasks
      Title: this.array.title,
      Description: this.array.description,
      IsCompleted: this.array.status === 'Completed', // Convert string to boolean
      CreatedAt: new Date() // Or keep original if editing
    };

    if (this.isEditMode) {
      // PUT - update task by ID
      this.service.updateTask(this.taskId!, payload).subscribe(() => {
        alert('Task updated!');
        this.router.navigate(['/task-list']);
      });
    } else {
      // POST - add new task
      this.service.postTask(payload).subscribe(() => {
        alert('Task added!');
        this.router.navigate(['/task-list']);
      });
    }

    // Reset form after submit
    this.array = { title: '', description: '', status: '' };
  }
}

import { Component ,OnInit} from '@angular/core';
import { ServService } from '../serv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit {
  departments: any[] = [];

  constructor(private appi: ServService) {}

  ngOnInit(): void {
      this.appi.getdata().subscribe({
        next:(data: any) => {
          this.departments = data;
        }
      })
  }

}

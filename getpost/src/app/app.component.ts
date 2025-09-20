import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponent } from './data/data.component';
import { EmployeeComponent } from './employee/employee.component';
import { PostdataComponent } from './postdata/postdata.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeComponent, PostdataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cahatgpt';
}

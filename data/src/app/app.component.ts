import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetComponent } from './get/get.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GetComponent,LoginComponent,SigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data';
}

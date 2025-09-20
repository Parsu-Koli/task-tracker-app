import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor() { }

  name: string = "";
  password: string = "";
  arr: { name: string; password: string; }[] = [];


  Onsave() {

    if (this.name && this.password) {
      alert("Login Successful");

      this.arr.push({
        name: this.name,
        password: this.password
      });
    }
  }



}

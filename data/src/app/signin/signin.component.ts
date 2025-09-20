import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  fullname:string="";
  email:string="";
  phno:number=0;
  password:string="";

  Onsave(){
    alert("Sign in Successful");
    console.log(this.fullname);
    console.log(this.email);
    console.log(this.phno);
    console.log

}
}

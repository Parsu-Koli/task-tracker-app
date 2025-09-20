import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetdataComponent } from './getdata/getdata.component';
import { PostComponent } from './post/post.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CustomPipePipe } from './custom-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PostComponent,GetdataComponent,CustomPipePipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first program of Pipe';
  date= new Date();
   a = 10;
}

import { Component ,inject,OnInit} from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postdata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postdata.component.html',
  styleUrl: './postdata.component.css'
})
export class PostdataComponent implements OnInit {
  departList: any[] = [];

  postdata=inject(PostService);

 

  
  ngOnInit():void{
    this.postdata.get().subscribe((data1: any) => {
      this.departList = data1.data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ArrayService } from 'src/app/service/array.service';

@Component({
  selector: 'app-profposting',
  templateUrl: './profposting.component.html',
  styleUrls: ['./profposting.component.scss'],
})
export class ProfpostingComponent  implements OnInit {
  
posts:any[] =[];
  constructor(private list: ArrayService) { }

  ngOnInit() {
    
    this.posts = this.list.getPosts();
    
  }
    
}

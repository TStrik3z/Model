import { Component, Input, OnInit } from '@angular/core';
import { ArrayService } from 'src/app/service/arraylistservice.service';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss'],
})
export class ReusableComponent  implements OnInit {

  @Input () content:any;

  constructor() { }

  ngOnInit() {

  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ArrayService } from '../service/arraylistservice.service';



@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
})
export class BlankPage implements OnInit {
  UserID = "asdasd";
  content:any[] =[];
  constructor(private data:ArrayService) { 
    
  }

  ngOnInit() {
    this.content = this.data.getPosts(); 
    console.log(this.content);
  };

  onClick(){

  };

 

}

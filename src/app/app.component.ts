import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  home='home compoo';
  follow = 'follow compo';
  constructor(private ser:CommonService ) {
    
  }
}

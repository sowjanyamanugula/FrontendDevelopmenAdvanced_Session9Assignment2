import { Component } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'my-app',
  template: `<h2>{{pageTitle}}</h2>`,
  providers:[HomeService]
    
})
export class HomeComponent  {
   pageTitle : string = `Session 9 Assignment 2`; 
  
  }




// import life cycle hook OnInit
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// implement OnInit
export class HomeComponent  implements OnInit {

  constructor() { }

  // implement ngOnInit
  ngOnInit(): void{

  }

}

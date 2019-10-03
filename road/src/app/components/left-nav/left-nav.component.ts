import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css'],
  animations: [
    fade
  ]
})
export class LeftNavComponent implements OnInit {
  
  title = "Text";
  tagline = "Text should be here";

  constructor() { }

  ngOnInit() { }

}
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { InfoWhatComponent } from '../info-what/info-what.component';
import { TechnologyComponent } from '../technology/technology.component';
import { fade } from 'src/app/animations';



@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css'],
  animations: [
    fade
  ]
})
export class HomeheaderComponent implements OnInit {

  heading = "Responsive Front-end Developer"
  text ="I am passionate about art of design with the art of programming";
	list = [
		{content: "HTML"},
		{content: "CSS"},
		{content: "JavaScript"},
		{content: "Angular"},
		{content: "Bootstrap"},
		{content: "Performance"},
    ];
    
  constructor() { }

  ngOnInit() {
   
  }

}
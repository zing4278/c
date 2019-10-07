import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Hello angular inline input';
  cost = 100;
  saveCost(value){
    this.cost=value;
  }
}

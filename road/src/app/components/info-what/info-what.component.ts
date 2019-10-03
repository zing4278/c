import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-info-what',
  templateUrl: './info-what.component.html',
  styleUrls: ['./info-what.component.css']
})
export class InfoWhatComponent implements OnInit {

  title = "What I do";
  
  public designdb:any = [];
  constructor(private _dataService : DataService) {}
  ngOnInit() {
    this._dataService.getConfig()
      .subscribe(data => this.designdb = data)
  }
}
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

   
  public techdb:any = [];
  constructor(private _dataService : DataService) {}
  ngOnInit() {
    this._dataService.getTechData()
      .subscribe(data => this.techdb = data)
  }

}
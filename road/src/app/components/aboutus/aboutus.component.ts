import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { fade } from 'src/app/animations';
import { loadingComponent } from '../../../common/loading/loading.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [
    fade
  ]
})
export class AboutusComponent implements OnInit {

  isLoading= false;

	title = "I'm a front-end developer.";
  
  public aboutdb:any = [];
  constructor(private _dataService : DataService) {}
  ngOnInit() {
    // this._dataService.getAboutData().subscribe(data => this.aboutdb = data);
    this.isLoading = true;
    this._dataService.getAboutData().subscribe(data => {this.aboutdb = (data); this.isLoading = false;});
  }

}

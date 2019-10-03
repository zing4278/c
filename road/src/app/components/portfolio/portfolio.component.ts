import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { fade } from 'src/app/animations';
import { loadingComponent } from '../../../common/loading/loading.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    fade
  ]
})
export class PortfolioComponent implements OnInit {
  
  isLoading= false;

  // public portfolio:any = [];
  public portThumb: any = [];
  constructor(private _dataService : DataService) {}
  ngOnInit() {
    // this._dataService.getAboutData().subscribe(data => this.aboutdb = data);
    this.isLoading = true;
    
    // this._dataService.getportfolioData().subscribe(data => {this.portfolio = (data); this.isLoading = false;});

    this._dataService.getportThumbData().subscribe(data => {this.portThumb = (data); this.isLoading = false;});
  }

}

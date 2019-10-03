import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idata } from './data';
import { techData } from './data';
import { aboutData } from './data';
import { portfolioData } from './data';
import { portThumbData } from './data';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  
  private configUrl = 'data/database.json';
  // private configUrl = 'http://localhost:3000/api/posts/';

  // private configUrl = 'http://beta7.parasverma.com/api/posts/';

  constructor(private http: HttpClient) { }

    getConfig(): Observable<Idata[]> {
      return this.http.get<Idata[]>(this.configUrl);
    }

    getTechData(): Observable<techData[]> {
      return this.http.get<techData[]>(this.configUrl);
    }

    getAboutData(): Observable<aboutData[]> {
      return this.http.get<aboutData[]>(this.configUrl);
    }

    getportfolioData(): Observable<portfolioData[]> {
      return this.http.get<portfolioData[]>(this.configUrl);
    }

    getportThumbData(): Observable<portThumbData[]> {
      return this.http.get<portThumbData[]>(this.configUrl);
    }
}


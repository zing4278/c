import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeheaderComponent } from './components/homeheader/homeheader.component';
import { InfoWhatComponent } from './components/info-what/info-what.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { DataService } from './services/data.service';
import { LoaderService } from './services/loader.service';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { ChangeTextDirective } from './directive/change-text.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { environment } from '../environments/environment';
import { AuthComponent } from './components/auth-est/auth.component'
import { loadingComponent } from '../common/loading/loading.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoginDataComponent } from './components/login-data/login-data.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeheaderComponent},
    { path: 'about', component: AboutusComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'contact', component: ContactUsComponent},
    { path: 'login', component: AuthComponent},
    { path: 'loginData', component: LoginDataComponent},
    { path: '**', component: HomeheaderComponent}
 ];

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HomeheaderComponent,
    InfoWhatComponent,
    TechnologyComponent,
    LeftNavComponent,
    AboutusComponent,
    PortfolioComponent,
    ContactComponent,
    NewuserComponent,
    ChangeTextDirective,
    LoaderComponent,
    AuthComponent,
    ContactUsComponent,
    loadingComponent,
    LoadingSpinnerComponent,
    LoginDataComponent   
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    RouterModule.forRoot(appRoutes, {useHash: true}),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataService, LoaderService, 
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

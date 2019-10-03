import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { loadingComponent } from '../../../common/loading/loading.component';
import { authService, AuthResponseData } from './auth.service';
import { fade } from 'src/app/animations';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    fade
  ]
})

export class AuthComponent implements OnInit {
  
  isLoginMode = true;
  isLoading= false;
  error: string = null;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(private authService: authService, private router: Router) { }

  ngOnInit() { }
  onSubmit(form: NgForm  ){
    // console.log(form.value);
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;

    if(this.isLoginMode){
      authObs =  this.authService.login(email, password);
    }else{
      this.authService.signup(email, password)
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/loginData'])
      }, errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}

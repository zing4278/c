import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fade } from 'src/app/animations';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations: [
    fade
  ]
})
export class ContactUsComponent implements OnInit {

  /*@ViewChild('f')*/ signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  user = {
    username: '',
    email: '',
    secretQquestion: '',
    answer: ''
  };
  submitted = false;

  suggestionUserName(){
    const suggestedName = "Under progress";
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: ''

    });
  }
  // onSubmit(){
  //   console.log('onsubmit');
  // }
  onSubmit(){
    //console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQquestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.signupForm.reset();
  }

 
  constructor() { }

  ngOnInit() {
  }

  
  
}

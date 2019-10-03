import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    fade
  ]  
})

export class ContactComponent implements OnInit {

  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() { }

  // onCreatePost(postData: { name: string; email: string; content: string }) {
  //   this.http
  //     .post(
       
  //       'https://data01-6d321.firebaseio.com/contacts.json',
  //       postData
  //     )
  //     .subscribe(responseData => {
  //       console.log(responseData);
  //     });
  // }

  onCreatePost(postData: { name: string; email: string; content: string }) {
    //Send Http request
    this.http
      .post(
        // 'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
        'https://data01-6d321.firebaseio.com/contacts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}

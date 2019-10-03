import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
  providers: [LoggingService]
})
export class NewuserComponent implements OnInit {

  constructor( private loggingService: LoggingService ) { }

  ngOnInit() {
  }

}

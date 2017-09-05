import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';





@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  userLoginURL = 'mock-data/login.json';
  result: string;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http
      .get(this.userLoginURL)
      .subscribe(
        data => {
          console.log('login success>');
          console.log(data);
        },
        error => {
          console.error(error);
        }
      );
  }
}

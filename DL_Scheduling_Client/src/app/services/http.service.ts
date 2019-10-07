// Services are special components that are reusable throughout your app. We're going to create a service for the purpose of communicating with an API to fetch some data and display it on our lists page.


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

  myMethod() {
    return console.log('Hey, what is up!');
  }

}

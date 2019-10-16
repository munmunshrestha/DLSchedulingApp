import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/observable';
 
@Injectable()
export class UserService {
 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/user/';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl.concat('all'));
  }
 
  public save(user: User) {
    return this.http.post<User>(this.usersUrl.concat('add'), user);
  }
}
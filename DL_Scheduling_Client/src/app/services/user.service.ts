// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { User } from '../models/User';
// import { Observable } from 'rxjs/observable';

// @Injectable()
// export class UserService {
 
//   private usersUrl: string;
 
//   constructor(private http: HttpClient) {
//     this.usersUrl = 'http://localhost:8080/user/';
//   }
 
//   public findAll(): Observable<User[]> {
//     return this.http.get<User[]>(this.usersUrl.concat('all'));
//   }
 
//   public save(user: User) {
//     return this.http.post<User>(this.usersUrl.concat('add'), user);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

interface myData {
    
    message: string,
    success: boolean
  }

  interface isLoggedIn {
    status: boolean
  }

  interface logoutStatus {
    success: boolean
  }

@Injectable()
export class UserService {
    
    constructor(private http: HttpClient) {}

    // getAll() {
    //     return this.http.get<Users[]>(`${environment.apiUrl}/users`);
    // }

    // getById(id: number) {
    //     return this.http.get<Users>(`${environment.apiUrl}/users/${id}`);
    // }
    getSomeData(){
        return this.http.get<myData>("/api/database.php")
    }

    isLoggedIn(): Observable<isLoggedIn>{
        return this.http.get<isLoggedIn>('/api/isloggedin.php')
    }

    logout(){
        return this.http.get<logoutStatus>('/api/logout.php')
    }
}
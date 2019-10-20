import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stdUnavailability } from '../models/std-unavailability';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class StdUnavailabilityService {

private stdUrl: string;

constructor(private http: HttpClient) {
    this.stdUrl = 'http://localhost:8080/stdUnavailability/';
  }
 
  public findAll(): Observable<stdUnavailability[]> {
    return this.http.get<stdUnavailability[]>(this.stdUrl.concat('all'));
  }
 
  public save(stdUnavailability: stdUnavailability) {
    return this.http.post<stdUnavailability>(this.stdUrl.concat('add'), stdUnavailability);
  }}

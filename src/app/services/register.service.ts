import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

@Injectable()
export class RegisterService {

  private registerUrl = "http://localhost:8090/users/add";
  constructor(private http: HttpClient) { }
  
  register(user: any): Observable<any>{
    return this.http.post<any>(this.registerUrl, user);
  }
}

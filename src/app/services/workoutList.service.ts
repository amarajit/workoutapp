import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WorkoutListService {

  private getWorkoutListUrl = "http://localhost:8090/workouts/user/";
  constructor(
    private http: HttpClient
  ) { }

  getWorkoutList(userName : string): Observable<any>{
       return this.http.get<any>(this.getWorkoutListUrl+userName);
  }

}

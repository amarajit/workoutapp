import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from '../model/workout';

@Injectable()
export class WorkoutService {

  private workoutUrl = "http://localhost:8090/workouts/add";
  constructor(private http: HttpClient) { }
  
  createWorkout(workout: any): Observable<any>{
    return this.http.post<any>(this.workoutUrl, workout);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from '../model/workout';
import { ServiceUrlProviderService } from './service-url-provider.service';

@Injectable()
export class WorkoutService {

  private workoutUrl : string;
  constructor(private http: HttpClient,
    private urlProv: ServiceUrlProviderService) {
      this.workoutUrl = urlProv.getCompleteServiceUrl("workouts/add");
     }
  
  createWorkout(workout: any): Observable<any>{
    return this.http.post<any>(this.workoutUrl, workout);
  }
}

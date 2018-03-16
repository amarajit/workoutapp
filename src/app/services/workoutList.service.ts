import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceUrlProviderService } from './service-url-provider.service';


@Injectable()
export class WorkoutListService {

  private getWorkoutListUrl: string;
  constructor(
    private http: HttpClient,
    private urlProv: ServiceUrlProviderService
  ) {
    this.getWorkoutListUrl = urlProv.getCompleteServiceUrl("workouts/user/");
  }

  getWorkoutList(userName: string): Observable<any> {
    return this.http.get<any>(this.getWorkoutListUrl + userName);
  }

}

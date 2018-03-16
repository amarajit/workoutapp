import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceUrlProviderService } from './service-url-provider.service';

@Injectable()
export class WorkoutTxListService {

  private getWorkoutListTxUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: ServiceUrlProviderService
  ) { 
      this.getWorkoutListTxUrl = urlProv.getCompleteServiceUrl("workouttxs");
  }

  getWorkoutTxList(workoutId: number): Observable<any>{
    console.log("Url: "+this.getWorkoutListTxUrl+"/"+workoutId);
    return this.http.get<any>(this.getWorkoutListTxUrl+"/"+workoutId);
  }

}

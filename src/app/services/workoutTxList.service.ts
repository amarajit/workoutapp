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
      this.getWorkoutListTxUrl = urlProv.getCompleteServiceUrl("workoutTxn");
  }

  getWorkoutTxList(user: any): Observable<any>{
    return this.http.get<any>(this.getWorkoutListTxUrl+"/"+2);
  }

}

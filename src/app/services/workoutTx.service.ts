import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceUrlProviderService } from './service-url-provider.service';

@Injectable()
export class WorkoutTxService {

  private createWorkoutTxUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: ServiceUrlProviderService
  ) { 
      this.createWorkoutTxUrl = urlProv.getCompleteServiceUrl("workouttxs");
      }

  createWorkoutTxn(workouTxn: any): Observable<any>{
       return this.http.post<any>(this.createWorkoutTxUrl+"/add",workouTxn);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceUrlProviderService } from './service-url-provider.service';

@Injectable()
export class UserService {

  private loginUrl: string;
  constructor(private http: HttpClient,
    private urlProv: ServiceUrlProviderService) {
    this.loginUrl = urlProv.getCompleteServiceUrl("users/login");
  }

  login(username: string, password: string): Observable<any> {
    let headers = new HttpHeaders()
      .set('userName', username)
      .set('password', password);

    return this.http.get<any>(this.loginUrl, { headers });
  }

}

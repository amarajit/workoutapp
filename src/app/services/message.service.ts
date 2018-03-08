import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

  private subject = new Subject<any>();
  private navChange = false;

  constructor(private router: Router) {
      router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              if (this.navChange) {
                  
                  this.navChange = false;
              } else {
                  
                  this.subject.next();
              }
          }
      });
  }

getMessage(): Observable<any> {
    return this.subject.asObservable();
}

error(message: string, navChange = false) {
    this.navChange = navChange;
    this.subject.next({ type: 'error', text: message });
}   

  success(message: string, navChange = false) {
      this.navChange = navChange;
      this.subject.next({ type: 'success', text: message });
  }

  

  

}

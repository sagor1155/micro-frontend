import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private testObs: Subject<boolean> = new Subject();

  constructor() { }

  getTestEvent(): Observable<boolean> {
    return this.testObs.asObservable();
  }

  publistTestEvent(data: boolean) {
    this.testObs.next(data);
  }

}

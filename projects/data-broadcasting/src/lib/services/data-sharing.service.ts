import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataSharingService {
  private data$ = new BehaviorSubject({} as any);

  constructor() { }

  shareData(value: Object) {
    this.data$.next({ ...this.data$.value, ...value });
  }

  getData(): Observable<any> {
    return this.data$;
  }

  getSpecificData(key: string): Observable<any> {
    return new Observable<any>((observer) => {
      this.data$.subscribe(res => {
        if (res[key]) {
          observer.next(res[key]);
        }
      })
    });
  }
}

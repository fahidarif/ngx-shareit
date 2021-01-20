import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataSharingService {
  private data$ = new BehaviorSubject({} as any);
  
  constructor() {}

  shareData(data: Object) {
    this.data$.next({ ...this.data$.value, ...data });
  }

  getData(): Observable<any> {
    return this.data$;
  }
}

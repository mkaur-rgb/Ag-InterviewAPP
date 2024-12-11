import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private clearButtonClickedSource = new BehaviorSubject<boolean>(false);
  clearButtonClicked$ = this.clearButtonClickedSource.asObservable();

  constructor() {}
  emitClearButtonClicked() {
    this.clearButtonClickedSource.next(true);
  }
}

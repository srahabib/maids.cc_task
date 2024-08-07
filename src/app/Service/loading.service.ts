import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
    // Check if 'show' method was called
    console.log('LoadingService.show called');

  }

  hide() {
    this.loadingSubject.next(false);
    // Check if 'hide' method was called
    console.log('LoadingService.hide called');
  }
}

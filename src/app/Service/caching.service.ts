// caching.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  private cache: Map<string, Observable<any>> = new Map();

  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    if (!this.cache.has(url)) {
      const observable = this.http.get<T>(url).pipe(
        map(response => {
          this.cache.set(url, of(response));
          return response;
        })
      );
      this.cache.set(url, observable);
    }
    return this.cache.get(url) as Observable<T>;
  }

  clearCache() {
    this.cache.clear();
  }
}

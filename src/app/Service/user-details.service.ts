// src/app/user-details.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CachingService } from './caching.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private cachingService: CachingService) { }

  getUserDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.cachingService.get<any>(url);
  }
}

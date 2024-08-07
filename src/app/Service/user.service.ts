// user.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CachingService } from './caching.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';

  constructor(private cachingService: CachingService) {}

  getUsers(page: number): Observable<any> {
    const url = `${this.baseUrl}?page=${page}`;
    return this.cachingService.get<any>(url);
  }

  getUserById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.cachingService.get<any>(url);
  }
}

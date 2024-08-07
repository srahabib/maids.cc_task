// src/app/user-details.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUserDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}

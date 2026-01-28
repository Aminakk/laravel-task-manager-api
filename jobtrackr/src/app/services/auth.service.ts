import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = API_URL;

  constructor(private http: HttpClient) { }

  // LOGIN
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.api}/login`, credentials);
  }

  // REGISTER (optional, later)
  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.api}/register`, data);
  }

  // GET TOKEN
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // LOGOUT
  logout() {
    localStorage.removeItem('token');
  }
}

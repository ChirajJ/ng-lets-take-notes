import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) {
    console.log('Auth Service initiated...');
  }

  isLoggedIn(): boolean {
    return Boolean(localStorage.getItem('token'));
  }

  login(token: string): void {
    this.setToken(token);
    this.router.navigate(['/']);
  }

  authenticate(email: string, pswd: string): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/auth', {
      email,
      pswd
    });
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}

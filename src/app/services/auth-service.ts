import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  basicApiUrl = 'http://localhost:3000';

  private httpClient = inject(HttpClient);
  private router = inject(Router);

  signUp(email: string, password: string) {
    console.log("sign up service");
    
    return this.httpClient
      .post<{ accessToken: string }>(`${this.basicApiUrl}/users`, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          console.log("tap, res: ", res);
          console.log("tap, res.accessToken ", res.accessToken);
          
          localStorage.setItem('token', res.accessToken);
        })
      );
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<{ accessToken: string }>(`${this.basicApiUrl}/posts`, {
        email,
        password,
      })
      .pipe(tap((res) => localStorage.setItem('token', res.accessToken)));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    const t = localStorage.getItem('token');
    // egyszerű check: token megléte. (Fejlettebb: dekódold és ellenőrizd az exp-et.)
    return !!t;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

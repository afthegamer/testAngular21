import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _token: string | null = null;

  login(): void {
    this._token = 'MySuperToken';
  }

  logout(): void {
    this._token = null;
  }

  getToken(): string | null {
    return this._token;
  }

  isAuthenticated(): boolean {
    return this._token !== null;
  }
}

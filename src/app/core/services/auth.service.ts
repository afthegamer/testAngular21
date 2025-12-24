import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token!: string;

  login(): void {
    this._token = 'MySuperToken';
  }

  getToken(): string {
    return (this._token = 'get  MySuperToken est bien get');
  }
}

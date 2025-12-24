import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {}

  onLogin(): void {
    this.authService.login();
    this.router.navigateByUrl('/facesnaps');
  }

  onLogout(): void {
    this.authService.logout();
  }
}

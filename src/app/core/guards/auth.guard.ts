import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authMatchGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  const attemptedUrl = '/' + segments.map((s) => s.path).join('/');
  return router.createUrlTree(['/auth'], {
    queryParams: { redirect: attemptedUrl },
  });
};

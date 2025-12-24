import { Routes } from '@angular/router';
import { authMatchGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Home = landing page (accessible sans auth)
  {
    path: '',
    loadComponent: () =>
      import('./features/face-snap/page/landing-page/landing-page').then((m) => m.LandingPage),
  },

  // Page d'auth (accessible sans auth)
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },

  // Feature protégée (lazy + guard)
  {
    path: 'facesnaps',
    canMatch: [authMatchGuard],
    loadChildren: () =>
      import('./features/face-snap/face-snap.routes').then((m) => m.FACE_SNAP_ROUTES),
  },

  { path: '**', redirectTo: '' },
];

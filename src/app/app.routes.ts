import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/face-snap/page/landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'facesnaps',
    loadChildren: () =>
      import('./features/face-snap/face-snap.routes').then((m) => m.FACE_SNAP_ROUTES),
  },
  { path: '**', redirectTo: '' },
];

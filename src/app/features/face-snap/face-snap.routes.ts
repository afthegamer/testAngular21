import { Routes } from '@angular/router';

export const FACE_SNAP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/face-snap-list/face-snap-list').then((m) => m.FaceSnapList),
  },
  {
    path: 'new',
    loadComponent: () => import('./page/new-face-snap/new-face-snap').then((m) => m.NewFaceSnap),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./page/single-face-snap/single-face-snap').then((m) => m.SingleFaceSnap),
  },
];

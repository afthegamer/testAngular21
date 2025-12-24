import { Routes } from '@angular/router';
import { FaceSnapList } from './features/face-snap/page/face-snap-list/face-snap-list';
import { LandingPage } from './features/face-snap/page/landing-page/landing-page';
import { SingleFaceSnap } from './features/face-snap/page/single-face-snap/single-face-snap';
import { NewFaceSnap } from './features/face-snap/page/new-face-snap/new-face-snap';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'facesnaps', component: FaceSnapList },
  { path: 'facesnaps/:id', component: SingleFaceSnap },
  { path: 'create', component: NewFaceSnap },
];

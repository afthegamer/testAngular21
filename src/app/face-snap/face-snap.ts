import { Component, inject, input, signal } from '@angular/core';
import { FaceSnapModel } from '../model/face-snap.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [RouterLink],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap {
  faceSnap = input.required<FaceSnapModel>();
  addSnap = signal<boolean>(false);
  private router = inject(Router);

  protected onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap().id}`);
  }
}

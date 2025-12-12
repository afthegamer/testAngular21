import { Component, inject, input, signal } from '@angular/core';
import { FaceSnapModel } from '../model/face-snap.model';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  imports: [NgStyle, NgClass, DatePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap {
  faceSnap = input.required<FaceSnapModel>();

  addSnap = signal<boolean>(false);
  private faceSnapServvice = inject(FaceSnapsService);

  onAddSnap() {
    this.faceSnapServvice.snapFaceSnapById(this.faceSnap().id, 'snap');
    this.addSnap.set(true);
  }

  onUnSnap() {
    this.faceSnapServvice.snapFaceSnapById(this.faceSnap().id, 'unsnap');
    this.addSnap.set(false);
  }
}

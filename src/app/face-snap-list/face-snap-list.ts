import { Component, inject, OnInit } from '@angular/core';
import { FaceSnapModel } from '../model/face-snap.model';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {
  faceSnaps!: FaceSnapModel[];
  private faceSnapServvice = inject(FaceSnapsService);

  ngOnInit() {
    this.faceSnaps = this.faceSnapServvice.getAllFaceSnaps();
  }
}

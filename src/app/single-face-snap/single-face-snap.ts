import { Component, inject, OnInit, signal } from '@angular/core';
import { FaceSnapModel } from '../model/face-snap.model';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgStyle, NgClass, DatePipe, RouterLink],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnap implements OnInit {
  faceSnap!: FaceSnapModel;

  addSnap = signal<boolean>(false);
  private faceSnapService = inject(FaceSnapsService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    this.getFaceSnap();
  }
  onAddSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.addSnap.set(true);
  }

  onUnSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.addSnap.set(false);
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.paramMap.get('id')!;
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}

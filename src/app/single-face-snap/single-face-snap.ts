import { Component, inject, OnInit, signal } from '@angular/core';
import { FaceSnapModel } from '../model/face-snap.model';
import { AsyncPipe, DatePipe, NgClass, NgStyle } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgStyle, NgClass, DatePipe, RouterLink, AsyncPipe],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnap implements OnInit {
  faceSnap$!: Observable<FaceSnapModel>;

  addSnap = signal<boolean>(false);
  private faceSnapService = inject(FaceSnapsService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    this.getFaceSnap();
  }
  onAddSnap(faceSnapId: number) {
    this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap');
    this.addSnap.set(true);
  }

  onUnSnap(faceSnapId: number) {
    this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap');
    this.addSnap.set(false);
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}

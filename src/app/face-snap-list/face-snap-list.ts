import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FaceSnapModel } from '../model/face-snap.model';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { interval, Observable, Subject, takeUntil, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap, AsyncPipe],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit, OnDestroy {
  faceSnaps!: FaceSnapModel[];
  faceSnaps$!: Observable<FaceSnapModel[]>;
  private destroy$!: Subject<boolean>;
  private faceSnapService = inject(FaceSnapsService);

  ngOnInit() {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
    // this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
    interval(1000).pipe(takeUntil(this.destroy$), tap(console.log)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}

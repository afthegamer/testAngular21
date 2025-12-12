import {Component, input, signal} from '@angular/core';
import {FaceSnapModel} from '../model/face-snap.model';
import {DatePipe, NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    DatePipe
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap {
  faceSnap = input.required<FaceSnapModel>();

  addSnap = signal<boolean>(false);


  onAddSnap() {
    this.faceSnap().onAddSnap();
    this.addSnap.set(true);
  }

  onUnSnap() {
    this.faceSnap().onUnSnap();
    this.addSnap.set(false);
  }

}

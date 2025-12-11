import {Component, input, OnInit, signal} from '@angular/core';
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
export class FaceSnap implements OnInit {
  faceSnap = input.required<FaceSnapModel>();

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl = 'https://cdn.pixabay.com/photo/2025/12/01/13/42/santa-claus-9988270_960_720.jpg';
  addSnap = signal<boolean>(false);

  ngOnInit() {
  }

  onAddSnap() {
    this.faceSnap().onAddSnap();
    this.addSnap.set(true);
  }

  onUnSnap() {
    this.faceSnap().onUnSnap();
    this.addSnap.set(false);
  }

}

import {Component, OnInit} from '@angular/core';
import {FaceSnap} from './face-snap/face-snap';
import {FaceSnapModel} from './model/face-snap.model';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnap
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  mySnap!: FaceSnapModel;
  myOtherSnap!: FaceSnapModel;
  myLastSnap!: FaceSnapModel;

  ngOnInit() {
    this.mySnap = new FaceSnapModel(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2025/12/01/13/42/santa-claus-9988270_960_720.jpg',
      new Date(),
      600
    );
    this.myOtherSnap = new FaceSnapModel(
      'arandomname',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2025/12/01/13/42/santa-claus-9988270_960_720.jpg',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnapModel(
      'momentomyself',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2025/12/01/13/42/santa-claus-9988270_960_720.jpg',
      new Date(),
      0
    );
  }
}

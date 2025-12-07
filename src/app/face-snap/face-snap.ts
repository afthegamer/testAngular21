import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl = 'https://cdn.pixabay.com/photo/2025/12/01/13/42/santa-claus-9988270_960_720.jpg';
  addSnap: boolean = false;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdAt = new Date();
    this.snaps = 0;
  }

  onAddSnap() {
    this.snaps++;
    this.addSnap = true;
  }

  onUnSnap() {
    this.snaps--;
    this.addSnap = false;
  }

}

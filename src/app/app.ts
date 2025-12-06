import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaceSnap} from './face-snap/face-snap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaceSnap],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

import { Injectable } from '@angular/core';
import { FaceSnapModel } from '../model/face-snap.model';
import { SnapType } from '../model/snap-type.type';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSanps: Array<FaceSnapModel> = [
    new FaceSnapModel(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2025/12/01/13/42/santa-claus-9988270_960_720.jpg',
      new Date(),
      600,
    ).withLocation('Paris'),
    new FaceSnapModel(
      'arandomname',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2025/12/01/13/42/santa-claus-9988270_960_720.jpg',
      new Date(),
      0,
    ).withLocation('Lyon'),
    new FaceSnapModel(
      'momentomyself',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2025/12/01/13/42/santa-claus-9988270_960_720.jpg',
      new Date(),
      0,
    ).withLocation('Nantes'),
  ];
  getAllFaceSnaps(): Array<FaceSnapModel> {
    return [...this.faceSanps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnapModel {
    const fondFaceSnap = this.faceSanps.find((faceSnap) => faceSnap.id === faceSnapId);
    if (!fondFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return fondFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    if (faceSnap) {
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    } else {
      throw new Error('SingleFaceSnap not found!');
    }
  }
}

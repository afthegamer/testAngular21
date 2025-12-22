import { inject, Injectable } from '@angular/core';
import { FaceSnapModel } from '../model/face-snap.model';
import { SnapType } from '../model/snap-type.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private http = inject(HttpClient);
  private faceSnaps: Array<FaceSnapModel> = [];
  /*[
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
  ];*/

  getAllFaceSnaps(): Observable<FaceSnapModel[]> {
    return this.http.get<FaceSnapModel[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: string): FaceSnapModel {
    const fondFaceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === faceSnapId);
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
  addFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): void {
    const faceSnap = new FaceSnapModel(
      formValue.title,
      formValue.description,
      formValue.imageUrl,
      new Date(),
      0,
    );

    if (formValue.location?.trim()) {
      faceSnap.setLocation(formValue.location.trim());
    }

    this.faceSnaps.push(faceSnap);
  }
}

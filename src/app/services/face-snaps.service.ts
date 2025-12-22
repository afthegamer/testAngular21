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

  getAllFaceSnaps(): Observable<FaceSnapModel[]> {
    return this.http.get<FaceSnapModel[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnapModel> {
    return this.http.get<FaceSnapModel>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId: number, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    if (faceSnap) {
      // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
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

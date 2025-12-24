import { inject, Injectable } from '@angular/core';
import { FaceSnapModel } from '../../../shared/model/face-snap.model';
import { SnapType } from '../../../shared/model/snap-type.type';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private http = inject(HttpClient);

  // private faceSnaps: Array<FaceSnapModel> = [];

  getAllFaceSnaps(): Observable<FaceSnapModel[]> {
    return this.http.get<FaceSnapModel[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnapModel> {
    return this.http.get<FaceSnapModel>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId: number, snapType: SnapType): Observable<FaceSnapModel> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map((faceSnap) => {
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        return faceSnap;
      }),
      switchMap((updatedFaceSnap) =>
        this.http.put<FaceSnapModel>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFaceSnap,
        ),
      ),
    );
  }

  // snapFaceSnapById(faceSnapId: number, snapType: SnapType): Observable<FaceSnapModel> {
  //   return this.http.patch<FaceSnapModel>(`http://localhost:3000/facesnaps/${faceSnapId}`, {
  //     snaps: snapType === 'snap' ? 1 : -1,
  //   });
  // }

  //  snapFaceSnapById(faceSnapId: number, snapType: SnapType): void {
  //   const faceSnap = this.getFaceSnapById(faceSnapId);
  //   if (faceSnap) {
  //     // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  //   } else {
  //     throw new Error('SingleFaceSnap not found!');
  //   }
  // }
  addFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): Observable<FaceSnapModel> {
    return this.getAllFaceSnaps().pipe(
      map((faceSnaps) => [...faceSnaps].sort((a, b) => a.id - b.id)),
      map((sortedFaceSnaps) => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      map((previousFaceSnap) => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFaceSnap.id + 1,
      })),
      switchMap((newFaceSnap) =>
        this.http.post<FaceSnapModel>('http://localhost:3000/facesnaps', newFaceSnap),
      ),
    );
  }
}

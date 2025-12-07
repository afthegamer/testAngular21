export class FaceSnapModel {

  constructor(
    public title: string,
    public  description: string,
    public  imageUrl: string,
    public  createdAt: Date,
    public snaps: number
  ) {}

  onAddSnap() {
    this.snaps++;
  }

  onUnSnap() {
    this.snaps--;
  }
}

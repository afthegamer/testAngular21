export class FaceSnapModel {
  location?: string;
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
  setLocation(location: string):FaceSnapModel {
    this.location = location;
    return this;
  }
  withLocation(location: string):FaceSnapModel{
    return this.setLocation(location);
  }
}

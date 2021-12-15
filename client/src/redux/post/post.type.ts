export interface Post {
  _id: string;
  user: string;
  name: string;
  avatar: string;
  status: string;
  target: string;
  text: string;
  created: Date;
  updated: Date;
  imageName: string;
  imageUrl: string;
}

export interface Comment {
  _id: string;
  text: string;
  updated: Date;
  created: Date;
  user: {
    _id: string;
    avatar: string;
    name: string;
  };
}

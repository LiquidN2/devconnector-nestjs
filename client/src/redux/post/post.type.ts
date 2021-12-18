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
  likesCount?: number;
  likedByCurrentUser?: boolean;
  likeIdByCurrentUser?: string;
  commentsCount?: number;
}

export interface PostData {
  text: string;
  target: string | null;
}

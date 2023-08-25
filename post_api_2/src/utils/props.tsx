export interface PostsProps {
  posts: {
    [postId: number]: { userId: number; title: string; body: string };
  };
  users: { [userId: number]: string };
}

export interface CardProps {
  title: string;
  body: string;
  userName: string;
  style?: string;
}

export interface CommentProps {
  comments: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }[];
}

export interface HeroProps {
  title: string;
}

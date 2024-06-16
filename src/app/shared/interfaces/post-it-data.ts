export interface PostItData {
  id: number;
  createdBy: User;
  createdAt: string | Date;
  title: string;
  content: string;
  schoolModule: any;
}

export interface User {
  id: number;
  username: string;
  email: string;
  note: PostItData[]
}

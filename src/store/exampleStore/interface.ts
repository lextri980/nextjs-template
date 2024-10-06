export interface IExample {
  state: boolean;
  postList: IPostList[];
  message: string;
}

interface IPostList {
  id: string | number;
  title: string;
}

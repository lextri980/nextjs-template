import { TApiResponse } from '../base.type';

/**
 * [Type] Global Example state
 */
export type TExampleState = {
  state: boolean;
  postList: TPostList[];
  message: string;
};

/**
 * [Type] Global Example state child
 * @description Post list
 */
type TPostList = TGetPostApiRes['data'];

export type TGetPostApiRes = TApiResponse<{
  id: number;
  body: string;
  title: string;
  userId: number;
}>;

import { TApiResponse } from '../base.type';

/**
 * [Type] Initial state
 */
export type TInitialState = {
  // Global loading state
  loading: boolean;
  // Post list
  postList: TPostList[];
  // Message
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

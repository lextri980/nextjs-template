import { TApiResponse } from '@/common/types';

// [Type] Initial state
export type TInitialState = {
  // Global loading state
  loading: boolean;
  // Post list
  postList: TPostList[];
  // Message
  message: string;
};

// [Type] Post list item type
export type TPostList = TGetPostApiRes['data'];

// [Type] Get Post API response type
export type TGetPostApiRes = TApiResponse<{
  id: number;
  body: string;
  title: string;
  userId: number;
}>;

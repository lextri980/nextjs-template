export type TApiResponse<TData> = {
  data: TData;
  status: number;
  statusText: string;
};

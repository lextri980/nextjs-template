// [Type] Generic API Response Type
export type TApiResponse<TData> = {
  // Data returned from API
  data: TData;
  // Status code
  status: number;
  // Status text
  statusText: string;
};

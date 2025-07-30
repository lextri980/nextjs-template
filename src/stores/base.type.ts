/**
 * [Type] API response
 * @param TData - Data type
 */
export type TApiResponse<TData> = {
  // Data returned from API
  data: TData;
  // Status code
  status: number;
  // Status text
  statusText: string;
};

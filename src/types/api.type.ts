import { AxiosResponse } from "axios";
import { SagaReturnType } from "redux-saga/effects";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type ResponseType<T extends (...arg: any) => Promise<AxiosResponse>> =
//   SagaReturnType<T>;
export type ResponseType<T extends () => Promise<AxiosResponse>> =
  SagaReturnType<T>;

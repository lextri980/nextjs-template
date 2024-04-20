import { AxiosResponse } from "axios";
import { SagaReturnType } from "redux-saga/effects";

export type ResponseType<T extends (...arg: any) => Promise<AxiosResponse>> =
  SagaReturnType<T>;

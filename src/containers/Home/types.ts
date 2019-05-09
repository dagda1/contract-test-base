export type ErrorMessage = string | null | undefined;

export type ApiActionCreator<T extends object, Payload = undefined> = T & {
  payload: Payload;
  error: ErrorMessage;
};

export enum HomeActionTypes {
  HOME_LOADING = '@@forecast/LOADING',
  HOME_SUCCESS = '@@forecast/SUCCESS',
  HOME_ERROR = '@@forecast/ERROR',
  HOME_CLEAR = '@@forecast/CLEAR'
}

export interface HomeClear {
  type: HomeActionTypes.HOME_CLEAR;
}

export type HomeActions = HomeClear;

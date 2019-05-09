import { HomeActions, HomeActionTypes } from './types';
import { Reducer } from 'redux';
import { HomeState } from '../../types/state';

export const initialHomeState: HomeState = { loading: false, error: undefined };

export const homeReducer: Reducer<HomeState, HomeActions> = (state = initialHomeState, action) => {
  switch (action.type) {
    case HomeActionTypes.HOME_CLEAR: {
      return { ...initialHomeState };
    }

    default:
      return state;
  }
};

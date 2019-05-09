import { State } from '../../types/state';
import { createSelector } from 'reselect';

export const getHomeState = (state: State) => state.home;

export const isLoadingSelector = createSelector(
  getHomeState,
  (forecastState) => forecastState.loading
);

export const errorSelector = createSelector(
  getHomeState,
  (forecastState) => forecastState.error
);
